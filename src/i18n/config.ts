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
    'site.title': 'See.UK.Later',
    'site.subtitle': 'Minimal musings on code, design, and life',
    'site.copyright': '© 2025 See.UK.Later. All Rights Reserved.',
    'labels.featuredPosts': 'Featured Posts',
    'labels.latestPosts': 'Latest Posts',
    'labels.viewAllPosts': 'View All Posts',
    'labels.backToHome': 'Back to Home',
    'labels.youMightAlsoLike': 'You Might Also Like',
    'labels.postedIn': 'Posted in',
    'labels.noArticlesFound': 'No articles found.',
    'labels.allCategories': 'All Categories',
    'labels.allTags': 'All Tags',
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
    'nav.home': '首页',
    'nav.blog': '博客',
    'nav.categories': '分类',
    'nav.tags': '标签',
    'nav.language': '语言',
    'site.title': 'See.UK.Later',
    'site.subtitle': '关于代码、设计和生活的简约思考',
    'site.copyright': '© 2025 See.UK.Later. 保留所有权利。',
    'labels.featuredPosts': '精选文章',
    'labels.latestPosts': '最新文章',
    'labels.viewAllPosts': '查看所有文章',
    'labels.backToHome': '返回首页',
    'labels.youMightAlsoLike': '您可能还喜欢',
    'labels.postedIn': '发布在',
    'labels.noArticlesFound': '未找到文章。',
    'labels.allCategories': '所有分类',
    'labels.allTags': '所有标签',
    'labels.exploreArticlesByTags': '按主题浏览文章',
    'labels.exploreArticlesByCategories': '按分类浏览文章',
    'labels.readMore': '阅读更多',
    'labels.shareThisArticle': '分享这篇文章',
    'pagination.prevText': '上一页',
    'pagination.nextText': '下一页',
    'pagination.postLabel': '篇文章',
    'language.switch': '切换语言',
    'language.english': 'English',
    'language.chinese': '中文',
    'categories.coding': '编程',
    'categories.webDev': '网页开发',
    'categories.apiDesign': 'API设计',
    'categories.technology': '技术',
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