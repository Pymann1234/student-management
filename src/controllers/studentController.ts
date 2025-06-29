import { Request, Response } from 'express';
import prisma from '../config/prisma';

export const getStudents = async (_req: Request, res: Response) => {
  const students = await prisma.student.findMany({ include: { enrollments: true } });
  res.json(students);
};

export const createStudent = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const student = await prisma.student.create({ data: { name, email } });
  res.status(201).json(student);
};