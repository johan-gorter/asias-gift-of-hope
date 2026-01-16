// Set language to Dutch for all pages in the root directory
export default {
  lang: 'nl',
  locale: 'nl-NL',
  permalink: function(data) {
    // Keep Dutch URLs at root level
    if (data.page.fileSlug === 'index') {
      return '/';
    }
    return `/${data.page.fileSlug}/`;
  }
};
