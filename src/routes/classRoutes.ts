import express from 'express';
import { getClasses, createClass, enrollStudent } from '../controllers/classController';

const router = express.Router();

router.get('/', getClasses);
router.post('/', createClass);
router.post('/enroll', enrollStudent);

export default router;