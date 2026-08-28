'use client'
import { completeOrder, deleteOrder } from '@/actions/order';
import { format, differenceInDays } from 'date-fns';
import { it } from 'date-fns/locale';

export default function OrderList({ orders }: { orders: any[] }) {
  if (orders.length === 0) return <p className="text-gray-500">Nessun ordine attivo. Ottimo lavoro!</p>;

  return (
    <ul className="flex flex-col gap-4">
      {orders.map(order => {
        const daysLeft = differenceInDays(new Date(order.dueDate), new Date());
        let alertColor = "border-[#D4C3B3] bg-white text-[#3E3A35]";
        if (daysLeft < 3) alertColor = "border-red-400 bg-[#FFF9F9] text-red-900";
        else if (daysLeft <= 7) alertColor = "border-[#E5B25D] bg-[#FFFCF5] text-[#8B6528]";

        return (
          <li key={order.id} className={`p-5 border-l-[6px] rounded-xl shadow-sm flex items-center justify-between border-y border-r border-y-[#E5E0D8] border-r-[#E5E0D8] transition-all hover:shadow-md ${alertColor}`}>
            <div>
              <p className="font-medium text-lg mb-1">{order.description}</p>
              <p className="text-sm opacity-80 font-light">
                Scadenza: {format(new Date(order.dueDate), 'dd MMM yyyy', { locale: it })} 
                <span className="ml-2 px-2 py-0.5 rounded-full bg-[#FAF9F6] border border-[#E5E0D8] text-xs">
                  {daysLeft < 0 ? 'Scaduto' : `${daysLeft} giorni rimanenti`}
                </span>
              </p>
            </div>
            <div className="flex gap-2 ml-4 flex-shrink-0">
              <button 
                onClick={() => completeOrder(order.id)}
                className="px-4 py-2 bg-[#FAF9F6] text-[#8B7355] border border-[#E5E0D8] rounded-lg hover:bg-white hover:border-[#D4C3B3] active:scale-95 transition-all shadow-sm font-medium text-sm"
              >
                Segna Completato
              </button>
              <button 
                onClick={() => {
                  if (confirm("Vuoi davvero eliminare questo ordine?")) deleteOrder(order.id);
                }}
                className="px-3 py-2 bg-white text-red-500 border border-[#E5E0D8] rounded-lg hover:bg-red-50 hover:border-red-200 active:scale-95 transition-all shadow-sm font-medium text-sm"
                title="Elimina"
              >
                ✕
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
