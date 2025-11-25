module.exports = function(eleventyConfig) {
  // Copy assets directory to output root (not preserving src/ structure)
  eleventyConfig.addPassthroughCopy({
    "src/assets": "assets"
  });
  
  // Copy manifest and worker to root
  eleventyConfig.addPassthroughCopy({
    "src/manifest.json": "manifest.json"
  });
  eleventyConfig.addPassthroughCopy({
    "src/OneSignalSDKWorker.js": "OneSignalSDKWorker.js"
  });

  // Watch for changes in assets and templates for better hot reload
  eleventyConfig.addWatchTarget("src/assets");
  eleventyConfig.addWatchTarget("src/templates");
  eleventyConfig.addWatchTarget("src/pages");

  // Set input and output directories
  return {
    dir: {
      input: "src/pages",
      includes: "../templates",
      output: "dist"
    },
    templateFormats: ["njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};

