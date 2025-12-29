module.exports = function (_env = {}, argsObject = {}) {
	return {
		entry: "./components/index.js",
		target: ["web"],
		optimization: {
			minimize: argsObject.mode === "production"
		},
		output: {
			path: __dirname,
			filename: "index.js"
		},
		stats: {
			errorDetails: true
		},
		resolve: {
			modules: ["node_modules"],
			extensions: [".js", ".css"],
			alias: { "@": __dirname }
		},
		module: {
			rules: [
				{
					test: /\.(png|jpeg|jpg|bmp|svg|gif)$/,
					type: "asset/resource"
				}
			]
		}
	};
};
