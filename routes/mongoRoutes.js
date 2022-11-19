import express from 'express';
import {getAllFinalproject, getAllFinalproject, createFinalproject, updateFinalproject, defeatFinalproject  } from '../controllers/finalprojectControllers.js';

const mongoRouter = express.Router();

mongoRouter.route('/').get(getAllFinalproject).post(createFinalproject);
mongoRouter.route('/:id').get(getAllFinalproject).put(updateFinalproject).delete(defeatFinalproject);

export default mongoRouter;
