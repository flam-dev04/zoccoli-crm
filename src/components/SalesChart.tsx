'use client'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';

export default function SalesChart({ orders }: { orders: any[] }) {
  if (orders.length === 0) return <p className="text-gray-500">Completa un ordine per vedere il grafico.</p>;

  // Group by date (simplified cumulative logic for UI)
  const dataMap: Record<string, number> = {};
  orders.forEach(o => {
    const date = format(new Date(o.createdAt), 'MMM dd', { locale: it });
    dataMap[date] = (dataMap[date] || 0) + 1;
  });

  let cumulative = 0;
  const data = Object.entries(dataMap).map(([date, count]) => {
    cumulative += count;
    return { date, count: cumulative };
  });

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <XAxis dataKey="date" stroke="#A89F91" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#A89F91" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }} />
          <Area type="monotone" dataKey="count" stroke="#8B7355" fill="#FAF9F6" strokeWidth={3} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
