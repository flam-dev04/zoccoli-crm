'use client'
import { useTransition } from 'react';
import { completeOrder, deleteOrder } from '@/actions/order';
import { format, differenceInDays } from 'date-fns';
import { it } from 'date-fns/locale';

function OrderItem({ order }: { order: any }) {
  const [isPendingComplete, startCompleteTransition] = useTransition();
  const [isPendingDelete, startDeleteTransition] = useTransition();

  const daysLeft = differenceInDays(new Date(order.dueDate), new Date());
  let alertColor = "border-[#D4C3B3] bg-white text-[#3E3A35]";
  if (daysLeft < 3) alertColor = "border-red-400 bg-[#FFF9F9] text-red-900";
  else if (daysLeft <= 7) alertColor = "border-[#E5B25D] bg-[#FFFCF5] text-[#8B6528]";

  const isBusy = isPendingComplete || isPendingDelete;

  return (
    <li
      className={`p-5 border-l-[6px] rounded-2xl shadow-sm flex items-center justify-between border-y border-r border-y-[#E5E0D8] border-r-[#E5E0D8] transition-all duration-200 hover:shadow-md ${alertColor} ${isBusy ? 'opacity-50 pointer-events-none' : ''}`}
    >
      <div>
        <p className="font-semibold text-lg mb-1 tracking-tight text-[#1C1A18]">{order.description}</p>
        <p className="text-sm opacity-85 font-normal">
          Scadenza: {format(new Date(order.dueDate), 'dd MMM yyyy', { locale: it })} 
          <span className="ml-2 px-2.5 py-0.5 rounded-full bg-[#FAF9F6] border border-[#E5E0D8] text-xs font-medium">
            {daysLeft < 0 ? 'Scaduto' : `${daysLeft} giorni rimanenti`}
          </span>
        </p>
      </div>

      <div className="flex items-center gap-2 ml-4 flex-shrink-0">
        {/* Complete button with hand cursor & translucent hover layer */}
        <button
          disabled={isBusy}
          onClick={() => {
            startCompleteTransition(async () => {
              await completeOrder(order.id);
            });
          }}
          className="relative cursor-pointer overflow-hidden px-4 py-2.5 bg-[#FAF9F6] text-[#8B7355] border-2 border-[#E5E0D8] rounded-xl hover:bg-[#8B7355]/15 hover:border-[#8B7355] hover:text-[#5E4C36] hover:shadow-md active:scale-95 transition-all duration-200 font-semibold text-sm group flex items-center gap-2"
          title="Segna ordine come completato"
        >
          {/* Subtle translucent under-glow on hover */}
          <span className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
          <span className="relative z-10 flex items-center gap-1.5">
            {isPendingComplete ? (
              <>
                <span className="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-[#8B7355] border-t-transparent" />
                <span>Salvataggio...</span>
              </>
            ) : (
              <>
                <span className="text-base">✓</span>
                <span>Segna Completato</span>
              </>
            )}
          </span>
        </button>

        {/* Delete button with hand cursor & translucent red hover layer */}
        <button
          disabled={isBusy}
          onClick={() => {
            if (confirm("Vuoi davvero eliminare questo ordine?")) {
              startDeleteTransition(async () => {
                await deleteOrder(order.id);
              });
            }
          }}
          className="relative cursor-pointer overflow-hidden px-3.5 py-2.5 bg-white text-red-500 border-2 border-red-100 rounded-xl hover:bg-red-500/10 hover:border-red-300 hover:text-red-700 hover:shadow-md active:scale-95 transition-all duration-200 font-bold text-sm group flex items-center justify-center"
          title="Elimina definitivamente"
        >
          {/* Subtle translucent red under-glow on hover */}
          <span className="absolute inset-0 bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
          <span className="relative z-10">
            {isPendingDelete ? (
              <span className="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-red-500 border-t-transparent" />
            ) : (
              '✕'
            )}
          </span>
        </button>
      </div>
    </li>
  );
}

export default function OrderList({ orders }: { orders: any[] }) {
  if (orders.length === 0) {
    return (
      <div className="p-8 text-center rounded-2xl border-2 border-dashed border-[#E5E0D8] bg-[#FAF9F6]/50">
        <p className="text-[#8B7355] font-medium">Nessun ordine attivo. Ottimo lavoro!</p>
      </div>
    );
  }

  return (
    <ul className="flex flex-col gap-4">
      {orders.map(order => (
        <OrderItem key={order.id} order={order} />
      ))}
    </ul>
  );
}
