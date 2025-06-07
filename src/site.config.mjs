/**
 * Storyteller Theme Configuration
 * 
 * This file contains all the customizable settings for your Storyteller blog theme.
 * Modify these values to personalize your blog's appearance and behavior.
 */

export default {
    // ===== BASIC SITE INFORMATION =====

    /**
     * Main site title displayed in the header and browser title
     * @type {string}
     */
    siteTitle: "The Storyteller",

    /**
     * Subtitle or tagline shown under the main title
     * @type {string}
     */
    siteSubTitle: "Minimal musings on code, design, and life",

    /**
     * Copyright text displayed in the footer
     * @type {string}
     */
    copyright: "© 2025 The Storyteller. All Rights Reserved.",

    // ===== HOMEPAGE DISPLAY OPTIONS =====

    /**
     * Whether to show author information on the homepage
     * @type {boolean}
     * @default false
     */
    showAuthorsOnHomePage: false,

    /**
     * Whether to display the featured posts section on homepage
     * @type {boolean}
     * @default true
     */
    showFeaturrdPostsOnHomePage: true,

    /**
     * Number of latest posts to display on the homepage
     * @type {number}
     * @default 6
     */
    numberOfLatestPostsPerPage: 6,

    // ===== UI LABELS & CUSTOMIZABLE TEXT =====

    /**
     * Customizable text labels used throughout the site
     * Change these to localize your blog or match your preferred terminology
     * @type {object}
     */
    labels: {
        /**
         * Title for the featured posts section on homepage
         * @type {string}
         */
        featuredPosts: "Featured Posts",

        /**
         * Title for the latest posts section on homepage
         * @type {string}
         */
        latestPosts: "Latest Posts",

        /**
         * Text for the link that goes to the paginated blog view
         * @type {string}
         */
        viewAllPosts: "View All Posts",

        /**
         * Text for back navigation links
         * @type {string}
         */
        backToHome: "Back to Home",

        /**
         * Title for the similar/related posts section on article pages
         * @type {string}
         */
        youMightAlsoLike: "You Might Also Like",

        /**
         * Prefix text shown before category names in articles
         * @type {string}
         */
        postedIn: "Posted in",

        /**
         * Message displayed when no articles are found
         * @type {string}
         */
        noArticlesFound: "No articles found.",

        /**
         * Main title for the categories listing page
         * @type {string}
         */
        allCategories: "All Categories",

        /**
         * Main title for the tags listing page
         * @type {string}
         */
        allTags: "All Tags",

        /**
         * Description text shown on the tags listing page
         * @type {string}
         */
        exploreArticlesByTags: "Explore articles organized by topics",

        /**
         * Description text shown on the categories listing page
         * @type {string}
         */
        exploreArticlesByCategories: "Explore articles organized by topics",
    },

    // ===== NAVIGATION & FOOTER OPTIONS =====

    /**
     * Whether to show the "Categories" link in the footer
     * @type {boolean}
     * @default true
     */
    showCategoriesLinkOnFooter: true,

    /**
     * Whether to show the "Tags" link in the footer
     * @type {boolean}
     * @default true
     */
    showTagsLinkOnFooter: true,

    // ===== POST DISPLAY OPTIONS =====

    /**
     * Whether to show similar/related posts at the bottom of article pages
     * @type {boolean}
     * @default true
     */
    showSimilarPosts: true,

    /**
     * Whether to show "Read More" links on featured post cards
     * @type {boolean}
     * @default true
     */
    showReadMoreLinkOnFeaturedPosts: true,

    /**
     * Whether to display thumbnail images on featured post cards
     * @type {boolean}
     * @default true
     */
    showThumbnailOnFeaturedPosts: true,

    // ===== ANALYTICS =====

    /**
     * Google Analytics tracking ID (Measurement ID)
     * Format: G-XXXXXXXXXX
     * Set to empty string or remove to disable analytics
     * @type {string}
     * @example "G-ABCD1234EF"
     */
    gTag: "G-V5QHDKBFP"
}

