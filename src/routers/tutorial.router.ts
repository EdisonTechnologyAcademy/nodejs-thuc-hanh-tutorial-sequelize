import express from 'express';
import Tutorial from '../models/tutorial.model';

const tutorialRouter = express.Router();

tutorialRouter.post('/add', async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      description: req.body.description,
      published: req.body.published ? req.body.published : false
    };
    const tutorial = await Tutorial.create(data);
    res.status(200).json(tutorial);
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err.message })
  }
})

tutorialRouter.get('/list', async (req, res) => {
  try {
    const tutorials = await Tutorial.findAll();
    res.status(200).json(tutorials);
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err.message })
  }
})

tutorialRouter.put('/update/:id', async (req, res) => {
  try {
    const id = req.params.id;

    await Tutorial.update(req.body, {
      where: { id }
    });
    const tutorial = await Tutorial.findOne({where: {id}})
    res.status(200).json(tutorial);
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err.message })
  }
})

tutorialRouter.delete('/delete/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const tutorial = await Tutorial.destroy({ where: { id } });
    res.status(200).json({message: "Delete success"});
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err.message })
  }
})

export default tutorialRouter;