import { Router } from 'express';
import { createCourse, getCourses } from './course.controller';

const router = Router();

router.post('/', createCourse);
router.get('/', getCourses);

export default router;
