import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const todos = await prisma.todo.findMany();
    res.status(200).json(todos);
  }

  if (req.method === 'POST') {
    const { title } = req.body;
    const newTodo = await prisma.todo.create({
      data: {
        title,
      },
    });
    res.status(201).json(newTodo);
  }

  if (req.method === 'PUT') {
    const { id, completed } = req.body;
    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: { completed },
    });
    res.status(200).json(updatedTodo);
  }

  if (req.method === 'DELETE') {
    const { id } = req.body;
    await prisma.todo.delete({
      where: { id },
    });
    res.status(204).end();
  }
  
}
