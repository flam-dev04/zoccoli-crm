import { getOrders } from "@/actions/order";
import OrderForm from "@/components/OrderForm";
import OrderList from "@/components/OrderList";
import SalesChart from "@/components/SalesChart";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function Home() {
  const orders = await getOrders();
  
  const completedOrders = orders.filter((o: any) => o.completed).length;
  const pendingOrders = orders.length - completedOrders;

  return (
    <main className="p-8 lg:p-12 max-w-[1400px] mx-auto w-full">
      {/* Header */}
      <header className="mb-12">
        <h1 className="font-playfair text-5xl font-medium tracking-tight mb-2">Lo Zoccolaio</h1>
        <p className="text-[#8B7355] text-lg font-light tracking-wide">Gestione Artigianale Ordini</p>
      </header>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column (Main Stats & List) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Top Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.02)] border border-[#E5E0D8]">
              <h3 className="text-[#8B7355] text-sm uppercase tracking-wider mb-2">Ordini in Corso</h3>
              <p className="text-4xl font-playfair font-medium">{pendingOrders}</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.02)] border border-[#E5E0D8]">
              <h3 className="text-[#8B7355] text-sm uppercase tracking-wider mb-2">Ordini Completati</h3>
              <p className="text-4xl font-playfair font-medium">{completedOrders}</p>
            </div>
          </div>
          
          {/* Chart */}
          <div className="bg-white p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.02)] border border-[#E5E0D8]">
            <h2 className="font-playfair text-2xl font-medium mb-6">Andamento Vendite</h2>
            <SalesChart orders={orders as any} />
          </div>

          {/* List */}
          <div className="bg-white p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.02)] border border-[#E5E0D8]">
            <h2 className="font-playfair text-2xl font-medium mb-6">Ordini Recenti</h2>
            <OrderList orders={orders.filter((o: any) => !o.completed)} />
          </div>
        </div>

        {/* Right Column (Form & Image) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Image Placeholder Card */}
          <div className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.02)] border border-[#E5E0D8] overflow-hidden relative h-[380px] group">
            <div className="absolute inset-0 bg-[#E5E0D8] transition-transform duration-700 group-hover:scale-105">
               <Image src="/zoccoli-real.jpg" alt="Lo Zoccolaio - Artigianato" fill className="object-cover" priority /> 
            </div>
          </div>

          {/* Order Form */}
          <div className="bg-white p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.02)] border border-[#E5E0D8] flex-1">
            <h2 className="font-playfair text-2xl font-medium mb-6">Nuovo Ordine</h2>
            <OrderForm />
          </div>
        </div>

      </div>
    </main>
  );
}
