'use client'
import { createOrder } from '@/actions/order';

export default function OrderForm() {
  return (
    <form action={createOrder} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="description" className="text-sm font-medium text-[#3E3A35]">Descrizione Zoccolo</label>
        <textarea id="description" name="description" required className="border border-[#E5E0D8] rounded-xl p-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#8B7355] transition-all resize-none shadow-sm" rows={3}></textarea>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="dueDate" className="text-sm font-medium text-[#3E3A35]">Data Scadenza</label>
        <input type="date" id="dueDate" name="dueDate" required className="border border-[#E5E0D8] rounded-xl p-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#8B7355] transition-all shadow-sm" />
      </div>
      <button type="submit" className="bg-[#3E3A35] text-white py-3 rounded-xl font-medium hover:bg-[#2C2A28] active:scale-[0.98] transition-all mt-2 shadow-md">
        Aggiungi Ordine
      </button>
    </form>
  );
}
