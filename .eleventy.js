module.exports = function (eleventyConfig) {
  // Find and copy any `webp` files, maintaining directory structure.
  eleventyConfig.addPassthroughCopy("img/*.png");
  eleventyConfig.addPassthroughCopy("js/*.js");
  eleventyConfig.addPassthroughCopy("css/*.css");
  eleventyConfig.addPassthroughCopy("*.ico");
};
