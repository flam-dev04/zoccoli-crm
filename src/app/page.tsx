import { getOrders } from "@/actions/order";
import OrderForm from "@/components/OrderForm";
import OrderList from "@/components/OrderList";
import SalesChart from "@/components/SalesChart";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

export default async function Home() {
  const orders = await getOrders();
  
  const completedOrders = orders.filter((o: any) => o.completed).length;
  const pendingOrders = orders.length - completedOrders;

  return (
    <main className="p-8 lg:p-12 max-w-[1400px] mx-auto w-full">
      {/* Header */}
      <header className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="font-playfair text-6xl md:text-7xl font-medium tracking-tight mb-4 text-[#3E3A35] drop-shadow-md">
            Lo Zoccolaio
          </h1>
          <div className="flex items-center gap-4">
            <span className="bg-white text-[#8B7355] border border-[#E5E0D8] px-5 py-2 rounded-full text-sm font-semibold tracking-[0.15em] uppercase shadow-md">
              Fatti a mano e su misura
            </span>
            <span className="text-[#8B7355] text-sm font-medium tracking-wide hidden sm:inline-block drop-shadow-sm">
              | Gestione Artigianale Ordini
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <UserButton appearance={{ elements: { userButtonAvatarBox: "w-12 h-12 shadow-md border-2 border-[#E5E0D8]" } }} />
        </div>
      </header>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column (Main Stats & List) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Top Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.02)] border border-[#E5E0D8]">
              <h3 className="text-[#8B7355] text-sm uppercase tracking-wider mb-2">Ordini in Corso</h3>
              <p className="text-4xl font-playfair font-medium text-[#3E3A35]">{pendingOrders}</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.02)] border border-[#E5E0D8]">
              <h3 className="text-[#8B7355] text-sm uppercase tracking-wider mb-2">Ordini Completati</h3>
              <p className="text-4xl font-playfair font-medium text-[#C5A059] drop-shadow-sm">{completedOrders}</p>
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
