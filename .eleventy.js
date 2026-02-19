const htmlmin = require("html-minifier-terser");

module.exports = (eleventyConfig) => {
	// This will stop the default behaviour of foo.html being turned into foo/index.html
	eleventyConfig.addGlobalData("permalink", "{{page.filePathStem}}.html");

	eleventyConfig.addTransform("htmlmin", function (content) {
		if ((this.page.outputPath || "").endsWith(".html")) {
			const minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
				minifyCSS: true,
				minifyJS: true,
			});
			return minified;
		}
		return content;
	});

	return {
		dir: {
			input: "content",
			output: "website/blog",
		},
	};
};
