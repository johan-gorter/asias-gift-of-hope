import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

const pathPrefix = process.env.PATH_PREFIX || "/";

export default function (eleventyConfig) {
  // Copy static files to output
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/apple-touch-icon.png");

  // Image optimization: auto-converts <img> to optimized <picture>
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    extensions: "html",
    formats: ["avif", "webp", "auto"],
    widths: ["auto", 400, 800, 1200],
    urlPath: `${pathPrefix}img/`,
    outputDir: "./_site/img/",
    filenameFormat: function (id, src, width, format) {
      // Ensure filename doesn't start with underscore by adding 'i' prefix if needed
      const hash = id.startsWith('_') ? 'i' + id : id;
      return `${hash}-${width}.${format}`;
    },
    defaultAttributes: {
      loading: "lazy",
      decoding: "async",
    },
  });

  return {
    pathPrefix: pathPrefix,
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
  };
}
