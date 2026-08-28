import { getOrders } from '@/actions/order';
import OrderList from '@/components/OrderList';
import OrderForm from '@/components/OrderForm';
import SalesChart from '@/components/SalesChart';

export default async function Home() {
  const orders = await getOrders();
  const activeOrders = orders.filter((o: any) => !o.completed);
  const completedOrders = orders.filter((o: any) => o.completed);

  return (
    <main className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2 space-y-8">
        <section className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Ordini Attivi</h2>
          <OrderList orders={activeOrders} />
        </section>
        <section className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Grafico Vendite</h2>
          <SalesChart orders={completedOrders} />
        </section>
      </div>
      <div className="md:col-span-1">
        <section className="bg-white p-6 rounded-xl shadow-sm sticky top-8">
          <h2 className="text-xl font-semibold mb-4">Nuovo Ordine</h2>
          <OrderForm />
        </section>
      </div>
    </main>
  );
}
