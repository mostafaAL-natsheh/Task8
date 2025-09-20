import { Request, Response } from 'express';
import { courses } from './course.service';
import { z } from 'zod';

const courseSchema = z.object({
  title: z.string(),
  description: z.string(),
  price: z.number(),
  durationWeeks: z.number(),
  tags: z.array(z.string()).optional(),
});

export const createCourse = (req: Request, res: Response) => {
  try {
    const data = courseSchema.parse(req.body);
    const course = { id: (courses.length + 1).toString(), ...data };
    courses.push(course);
    res.status(201).json(course);
  } catch (e: any) {
    res.status(400).json({ errors: e.errors });
  }
};

export const getCourses = (_req: Request, res: Response) => {
  res.json(courses);
};
