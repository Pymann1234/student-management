import { Request, Response } from 'express';
import prisma from '../config/prisma';

export const getTeachers = async (_req: Request, res: Response) => {
  const teachers = await prisma.teacher.findMany({ include: { classes: true } });
  res.json(teachers);
};

export const createTeacher = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const teacher = await prisma.teacher.create({ data: { name, email } });
  res.status(201).json(teacher);
};
