'use client'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';

export default function SalesChart({ orders }: { orders: any[] }) {
  if (orders.length === 0) return <p className="text-[#A89F91]">Aggiungi un ordine per vedere le statistiche.</p>;

  // Group by date to show clear daily statistics
  const dataMap: Record<string, { completati: number, inCorso: number }> = {};
  orders.forEach(o => {
    const date = format(new Date(o.createdAt), 'MMM dd', { locale: it });
    if (!dataMap[date]) dataMap[date] = { completati: 0, inCorso: 0 };
    if (o.completed) dataMap[date].completati += 1;
    else dataMap[date].inCorso += 1;
  });

  const data = Object.entries(dataMap).map(([date, counts]) => ({
    date,
    completati: counts.completati,
    inCorso: counts.inCorso
  }));

  return (
    <div className="h-64 w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }} barGap={6}>
          <XAxis dataKey="date" stroke="#A89F91" fontSize={12} tickLine={false} axisLine={false} dy={10} />
          <YAxis stroke="#A89F91" fontSize={12} tickLine={false} axisLine={false} allowDecimals={false} />
          <Tooltip 
            cursor={{ fill: '#FAF9F6' }}
            contentStyle={{ borderRadius: '16px', border: '1px solid #E5E0D8', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', backgroundColor: '#fff', padding: '12px' }} 
          />
          <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '13px', color: '#8B7355' }} iconType="circle" />
          <Bar name="In Corso" dataKey="inCorso" fill="#E5E0D8" radius={[6, 6, 0, 0]} maxBarSize={40} />
          <Bar name="Completati" dataKey="completati" fill="#C5A059" radius={[6, 6, 0, 0]} maxBarSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
