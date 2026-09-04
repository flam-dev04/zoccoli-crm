'use client'
import { useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { createOrder } from '@/actions/order';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="relative cursor-pointer overflow-hidden rounded-xl bg-[#3E3A35] text-white py-3.5 px-6 font-semibold shadow-md transition-all duration-300 hover:bg-[#3E3A35]/90 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed group mt-2"
    >
      {/* Translucent glow / transparency layer underneath on hover */}
      <span className="absolute inset-0 bg-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <span className="relative z-10 flex items-center justify-center gap-2">
        {pending ? (
          <>
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            <span>Aggiunta in corso...</span>
          </>
        ) : (
          <span>+ Aggiungi Ordine</span>
        )}
      </span>
    </button>
  );
}

export default function OrderForm() {
  const formRef = useRef<HTMLFormElement>(null);

  async function handleAction(formData: FormData) {
    await createOrder(formData);
    formRef.current?.reset();
  }

  return (
    <form ref={formRef} action={handleAction} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="description" className="text-sm font-semibold text-[#3E3A35] tracking-wide">
          Descrizione Zoccolo
        </label>
        <textarea
          id="description"
          name="description"
          required
          placeholder="Es: Modello con fascia in camoscio beige..."
          rows={3}
          className="w-full border-2 border-[#E5E0D8] rounded-xl p-3.5 bg-white text-[#1C1A18] font-medium text-base placeholder:text-[#A89F91] focus:outline-none focus:border-[#8B7355] focus:ring-4 focus:ring-[#8B7355]/15 hover:border-[#C5A059] transition-all resize-none shadow-sm"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="dueDate" className="text-sm font-semibold text-[#3E3A35] tracking-wide">
          Data Scadenza
        </label>
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          required
          className="w-full border-2 border-[#E5E0D8] rounded-xl p-3.5 bg-white text-[#1C1A18] font-medium text-base focus:outline-none focus:border-[#8B7355] focus:ring-4 focus:ring-[#8B7355]/15 hover:border-[#C5A059] transition-all shadow-sm cursor-pointer"
        />
      </div>

      <SubmitButton />
    </form>
  );
}

