'use server'
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createOrder(formData: FormData) {
  const description = formData.get('description') as string;
  const dueDate = new Date(formData.get('dueDate') as string);
  await prisma.order.create({ data: { description, dueDate } });
  revalidatePath('/');
}

export async function getOrders() {
  return await prisma.order.findMany({ orderBy: { dueDate: 'asc' } });
}

export async function completeOrder(id: string) {
  await prisma.order.update({ where: { id }, data: { completed: true } });
  revalidatePath('/');
}
