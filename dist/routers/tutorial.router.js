"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tutorial_model_1 = __importDefault(require("../models/tutorial.model"));
const tutorialRouter = express_1.default.Router();
tutorialRouter.post('/add', async (req, res) => {
    try {
        const data = {
            title: req.body.title,
            description: req.body.description,
            published: req.body.published ? req.body.published : false
        };
        const tutorial = await tutorial_model_1.default.create(data);
        res.status(200).json(tutorial);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
});
tutorialRouter.get('/list', async (req, res) => {
    try {
        const tutorials = await tutorial_model_1.default.findAll();
        res.status(200).json(tutorials);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
});
tutorialRouter.put('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await tutorial_model_1.default.update(req.body, {
            where: { id }
        });
        const tutorial = await tutorial_model_1.default.findOne({ where: { id } });
        res.status(200).json(tutorial);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
});
tutorialRouter.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const tutorial = await tutorial_model_1.default.destroy({ where: { id } });
        res.status(200).json({ message: "Delete success" });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
});
exports.default = tutorialRouter;
//# sourceMappingURL=tutorial.router.js.map