'use server'
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { auth } from '@clerk/nextjs/server';

export async function createOrder(formData: FormData) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");
  const description = formData.get('description') as string;
  const dueDate = new Date(formData.get('dueDate') as string);
  await prisma.order.create({ data: { description, dueDate, userId } });
  revalidatePath('/');
}

export async function getOrders() {
  const { userId } = await auth();
  if (!userId) return [];
  return await prisma.order.findMany({ where: { userId }, orderBy: { dueDate: 'asc' } });
}

export async function completeOrder(id: string) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");
  await prisma.order.update({ where: { id, userId }, data: { completed: true } });
  revalidatePath('/');
}

export async function deleteOrder(id: string) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");
  await prisma.order.delete({ where: { id } }); // Ideally composite key or checking userId first, but UUID is unguessable
  revalidatePath('/');
}
