const baseColors = require("./colors-base");

module.exports = {
	...baseColors,
	// Semantic colors
	// Semantic colors, old version DS System
	'primary': {
		'pastel-01': baseColors["blue-warm"]["20"],
		'pastel-02': baseColors["blue"]["10"],
		'lighten-01': baseColors["blue-warm-vivid"]["50"],
		'lighten-02': baseColors["blue-warm-vivid"]["40"],
		DEFAULT: baseColors["blue-warm-vivid"]["70"],
		'darken-01': baseColors["blue-warm-vivid"]["80"],
		'darken-02': baseColors["blue-warm-vivid"]["90"],
	},
	"secondary": {
		"01": baseColors["pure"][0],
		"02": baseColors["gray"][2],
		"03": '#ededed',
		"05": baseColors["gray"][20],
		"06": baseColors["gray"][40],//
		"07": baseColors["gray"][50],
		"08": baseColors["gray"][80],
		"09": baseColors["pure"][100],
	},
	"highlight": '#268744',
	"warning": baseColors["yellow-vivid"][20],
	"success": baseColors["green-cool-vivid"][50],
	"danger": baseColors["red-vivid"][50],
	"info": baseColors["blue-warm-vivid"][60],
	"support": {
		"01": baseColors["mint-cool-vivid"][40],
		"02": '#f2e317',
		"03": '#db4800',
		"04": baseColors["orange"][50],
		"05": baseColors["mint-cool-vivid"][20],
		"06": '#48cbeb',
		"07": '#c72487',
		"08": '#63007f',
		"09": '#f08080',
		"10": baseColors["orange-vivid"][30],
		"11": baseColors["orange-vivid"][5],
	}
};