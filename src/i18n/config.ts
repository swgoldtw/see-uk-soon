export const languages = {
  en: 'English',
  zh: '中文',
} as const;

export const defaultLang = 'zh';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.categories': 'Categories',
    'nav.tags': 'Tags',
    'nav.language': 'Language',
    'site.title': 'See UK Later',
    'site.subtitle': 'Memo on Staying in the UK',
    'site.copyright': '© 2025 see.uk.later All Rights Reserved.',
    'labels.featuredPosts': 'Featured Posts',
    'labels.latestPosts': 'Latest Posts',
    'labels.viewAllPosts': 'View All Posts',
    'labels.backToHome': 'Back to Home',
    'labels.youMightAlsoLike': 'You Might Also Like',
    'labels.postedIn': 'Categorized as',
    'labels.noArticlesFound': 'No articles found.',
    'labels.allCategories': 'All Categories',
    'labels.allTags': 'All Tags',
    'labels.tags': 'Tags',
    'labels.exploreArticlesByTags': 'Explore articles organized by topics',
    'labels.exploreArticlesByCategories': 'Explore articles organized by topics',
    'labels.readMore': 'Read More',
    'labels.shareThisArticle': 'Share this article',
    'pagination.prevText': 'Previous',
    'pagination.nextText': 'Next',
    'pagination.postLabel': 'posts',
    'language.switch': 'Switch Language',
    'language.english': 'English',
    'language.chinese': '中文',
    'categories.coding': 'Coding',
    'categories.webDev': 'Web Dev',
    'categories.apiDesign': 'API Design',
    'categories.technology': 'Technology',
  },
  zh: {
    'nav.home': '首頁',
    'nav.blog': '部落格',
    'nav.categories': '分類',
    'nav.tags': '標籤',
    'nav.language': '語言',
    'site.title': '英國待會見',
    'site.subtitle': '英國長居生活備忘錄',
    'site.copyright': '© 2025 see.uk.later 保留所有權利。',
    'labels.featuredPosts': '焦點文章',
    'labels.latestPosts': '最新文章',
    'labels.viewAllPosts': '查看所有文章',
    'labels.backToHome': '返回首頁',
    'labels.youMightAlsoLike': '您可能還喜歡',
    'labels.postedIn': '分類在',
    'labels.noArticlesFound': '未找到文章。',
    'labels.allCategories': '所有分類',
    'labels.allTags': '所有標籤',
    'labels.tags': '標籤',
    'labels.exploreArticlesByTags': '按主題瀏覽文章',
    'labels.exploreArticlesByCategories': '按分類瀏覽文章',
    'labels.readMore': '閱讀更多',
    'labels.shareThisArticle': '分享這篇文章',
    'pagination.prevText': '上一頁',
    'pagination.nextText': '下一頁',
    'pagination.postLabel': '篇文章',
    'language.switch': '切換語言',
    'language.english': 'English',
    'language.chinese': '中文',
    'categories.coding': '程式設計',
    'categories.webDev': '網頁開發',
    'categories.apiDesign': 'API設計',
    'categories.technology': '技術',
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
} 