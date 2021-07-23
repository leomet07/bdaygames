const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
	text: {
		required: true,
		type: String,
	},

	type: {
		required: true,
		type: String,
	},

	age: {
		required: true,
		type: Number,
	},
	gender: {
		required: true,
		type: String,
	},
	is_irl: {
		required: true,
		type: Boolean,
	},
});

const itemModelfordb = mongoose.model("Item", itemSchema);

module.exports = itemModelfordb;
