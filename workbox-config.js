module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{json,html,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};