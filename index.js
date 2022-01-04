module.exports = {
	website: {
		assets: "./lib",
		js: ["plugin.js"],
		css: ["plugin.css"],
	},
	hooks: {},
	blocks: {
		imgshow: {
			shortcuts: {
				parsers: ["markdown", "asciidoc", "restructuredtext"],
				start: "{~",
				end: "~}",
			},
			process: function (blk) {
				var imgHTML =
					`<a class="img" src="${blk.body.trim()}"> [查看图片] </a>`;
				return imgHTML;
			},
		},
	},
	filters: {},
};
