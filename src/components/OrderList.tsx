'use client'
import { completeOrder } from '@/actions/order';
import { format, differenceInDays } from 'date-fns';
import { it } from 'date-fns/locale';

export default function OrderList({ orders }: { orders: any[] }) {
  if (orders.length === 0) return <p className="text-gray-500">Nessun ordine attivo. Ottimo lavoro!</p>;

  return (
    <ul className="flex flex-col gap-4">
      {orders.map(order => {
        const daysLeft = differenceInDays(new Date(order.dueDate), new Date());
        let alertColor = "border-gray-200 bg-white text-gray-700";
        if (daysLeft < 3) alertColor = "border-red-500 bg-red-50 text-red-900";
        else if (daysLeft <= 7) alertColor = "border-orange-400 bg-orange-50 text-orange-900";

        return (
          <li key={order.id} className={`p-4 border-l-4 rounded-md shadow-sm flex items-center justify-between ${alertColor}`}>
            <div>
              <p className="font-medium">{order.description}</p>
              <p className="text-sm opacity-80">
                Scadenza: {format(new Date(order.dueDate), 'dd MMM yyyy', { locale: it })} 
                ({daysLeft < 0 ? 'Scaduto' : `${daysLeft} giorni rimanenti`})
              </p>
            </div>
            <button 
              onClick={() => completeOrder(order.id)}
              className="ml-4 p-2 bg-white border border-gray-300 rounded hover:bg-gray-100 flex-shrink-0"
            >
              Completato ✓
            </button>
          </li>
        );
      })}
    </ul>
  );
}
