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
    defaultAttributes: {
      loading: "lazy",
      decoding: "async",
    },
  });

  return {
    pathPrefix: process.env.PATH_PREFIX || "/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
  };
}
