import { Request, Response } from 'express';
import prisma from '../config/prisma';

export const getClasses = async (_req: Request, res: Response) => {
  const classes = await prisma.class.findMany({
    include: { teacher: true, enrollments: { include: { student: true } } }
  });
  res.json(classes);
};

export const createClass = async (req: Request, res: Response) => {
  const { name, teacherId } = req.body;
  const newClass = await prisma.class.create({
    data: { name, teacherId }
  });
  res.status(201).json(newClass);
};

export const enrollStudent = async (req: Request, res: Response) => {
  const { studentId, classId } = req.body;
  const enrollment = await prisma.enrollment.create({
    data: { studentId, classId }
  });
  res.status(201).json(enrollment);
};
