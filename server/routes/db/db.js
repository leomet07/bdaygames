const router = require("express").Router();
const Item = require("../../model/Item");
const Question = require("../../model/Question");
// Base route
router.get("/", async (req, res) => {
	res.json({ message: "Index for db" });
});

// Create an item
router.get("/get_items", get_items_handler);
router.post("/get_items", get_items_handler);
// Create an item
router.post("/create_item", async (req, res, next) => {
	try {
		const saved_item = await create_item(req.body);
		res.json({
			item: saved_item,
			description: "Successfully created the item.",
		});
	} catch (error) {
		next(error);
	}
});

async function create_item(query) {
	let item = await Item.create(query);
	let saved_item = await item.save();
	return saved_item;
}
async function get_items(query) {
	let items = await Item.find(query);
	return items;
}
async function get_items_handler(req, res, next) {
	try {
		const items = await get_items(req.body || {});
		res.json({
			items: items,
			description: "Successfully retrieved items.",
		});
	} catch (error) {
		next(error);
	}
}

// Question

router.get("/get_questionss", get_questions_handler);
router.post("/get_questions", get_questions_handler);
// Create an item
router.post("/create_question", async (req, res, next) => {
	try {
		const question = await create_question(req.body);
		res.json({
			question: question,
			description: "Successfully created the question.",
		});
	} catch (error) {
		next(error);
	}
});

async function create_question(query) {
	let question = await Question.create(query);
	let saved_question = await question.save();
	return saved_question;
}
async function get_questions(query) {
	let questions = await Question.find(query);
	return questions;
}
async function get_questions_handler(req, res, next) {
	try {
		const questions = await get_questions(req.body || {});
		res.json({
			questions: questions,
			description: "Successfully retrieved questions.",
		});
	} catch (error) {
		next(error);
	}
}

module.exports.router = router;
