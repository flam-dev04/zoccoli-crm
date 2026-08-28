'use client'
import { createOrder } from '@/actions/order';

export default function OrderForm() {
  return (
    <form action={createOrder} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="description" className="text-sm font-medium">Descrizione Zoccolo</label>
        <textarea id="description" name="description" required className="border rounded-md p-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0F172A]" rows={3}></textarea>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="dueDate" className="text-sm font-medium">Data Scadenza</label>
        <input type="date" id="dueDate" name="dueDate" required className="border rounded-md p-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0F172A]" />
      </div>
      <button type="submit" className="bg-[#0F172A] text-white py-2 rounded-md font-medium hover:bg-black transition">
        Aggiungi Ordine
      </button>
    </form>
  );
}
