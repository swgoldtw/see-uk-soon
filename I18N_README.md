# Internationalization (i18n) Support

This Astro project now supports internationalization with English and Chinese languages.

## Features

- **Language Switching**: Users can switch between English and Chinese using the language switcher in the header
- **URL-based Language Detection**: Languages are detected from the URL path (e.g., `/zh/` for Chinese, `/` for English)
- **Localized Content**: All UI text, navigation, and labels are translated
- **Language-specific URLs**: All internal links automatically use the correct language prefix
- **Localized Date Formatting**: Dates are formatted according to the selected language

## Language Structure

- **English (default)**: `/` - No language prefix
- **Chinese**: `/zh/` - Chinese language prefix

## How to Use

### For Users

1. **Language Switcher**: Click the language dropdown in the top-left corner of the header
2. **Direct URLs**: Navigate directly to `/zh/` for Chinese or `/` for English
3. **Automatic Detection**: The site will remember your language preference

### For Developers

#### Adding New Translations

1. **Update the i18n config** (`src/i18n/config.ts`):
   ```typescript
   export const ui = {
     en: {
       'new.key': 'English text',
       // ... existing translations
     },
     zh: {
       'new.key': '中文文本',
       // ... existing translations
     },
   }
   ```

2. **Use translations in components**:
   ```astro
   ---
   import { getLangFromUrl, useTranslations } from "../i18n/config";
   
   const currentLang = getLangFromUrl(Astro.url);
   const t = useTranslations(currentLang);
   ---
   
   <h1>{t('new.key')}</h1>
   ```

#### Adding New Languages

1. **Update the languages object** in `src/i18n/config.ts`:
   ```typescript
   export const languages = {
     en: 'English',
     zh: '中文',
     fr: 'Français', // Add new language
   } as const;
   ```

2. **Add translations** for the new language:
   ```typescript
   export const ui = {
     en: { /* English translations */ },
     zh: { /* Chinese translations */ },
     fr: { /* French translations */ },
   } as const;
   ```

3. **Update Astro config** (`astro.config.mjs`):
   ```javascript
   i18n: {
     defaultLocale: "en",
     locales: ["en", "zh", "fr"], // Add new locale
     routing: {
       prefixDefaultLocale: false,
     },
   },
   ```

4. **Create language-specific pages** in `src/pages/fr/` directory

#### Language-specific URLs

Use the `getLangUrl` helper function to generate language-specific URLs:

```astro
---
const getLangUrl = (path: string) => {
  return currentLang === 'en' ? path : `/${currentLang}${path}`;
};
---

<a href={getLangUrl('/blog/')}>Blog</a>
```

## File Structure

```
src/
├── i18n/
│   └── config.ts          # i18n configuration and translations
├── components/
│   ├── LanguageSwitcher.astro  # Language switcher component
│   ├── Header.astro            # Updated with language switcher
│   ├── Footer.astro            # Updated with i18n support
│   ├── PostCard.astro          # Updated with language URLs
│   ├── FeaturedCard.astro      # Updated with language URLs
│   └── Pagination.astro        # Updated with translations
├── layouts/
│   └── BlogLayout.astro        # Updated with language detection
└── pages/
    ├── index.astro             # English homepage
    └── zh/
        └── index.astro         # Chinese homepage
```

## Current Translations

The following UI elements are currently translated:

- Site title and subtitle
- Navigation links (Home, Blog, Categories, Tags, Authors)
- Footer links and copyright
- Blog post labels (Featured Posts, Latest Posts, Read More, etc.)
- Pagination controls (Previous, Next, page numbers)
- Language switcher labels

## Notes

- The default language is English (no URL prefix)
- Chinese pages are prefixed with `/zh/`
- All internal links automatically adapt to the current language
- Date formatting is localized (English: "January 1, 2024", Chinese: "2024年1月1日")
- The language switcher preserves the current page when switching languages 