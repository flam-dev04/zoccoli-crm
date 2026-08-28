# Zoccoli CRM

Zoccoli CRM è una piattaforma moderna e reattiva progettata per la gestione ottimizzata degli ordini di zoccoli su misura. Costruita con tecnologie all'avanguardia, offre un'interfaccia intuitiva e strumenti avanzati per il tracciamento e l'analisi delle vendite.

## 🚀 Funzionalità Principali

*   **Dashboard Interattiva**: Visualizzazione immediata dello stato degli ordini tramite un'interfaccia basata su *Bento Grid*.
*   **Gestione Ordini**: Inserimento rapido di nuovi ordini con descrizioni dettagliate e date di scadenza.
*   **Alert Semantici**: Indicatori visivi dinamici per le scadenze (avvisi per ordini in scadenza entro 3 o 7 giorni).
*   **Analisi Vendite**: Grafici interattivi (realizzati con Recharts) per monitorare l'andamento storico delle vendite e degli ordini completati.
*   **Architettura Fullstack**: Frontend ultra-veloce e backend robusto integrati in un'unica applicazione.

## 🛠 Stack Tecnologico

Il progetto sfrutta le tecnologie più moderne dell'ecosistema React:

*   **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Server Actions, Turbopack)
*   **Libreria UI**: [React 19](https://react.dev/)
*   **Database ORM**: [Prisma](https://www.prisma.io/)
*   **Database**: SQLite (Configurato per la facilità di sviluppo locale)
*   **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
*   **Grafici**: [Recharts](https://recharts.org/)
*   **Icone**: [Lucide React](https://lucide.dev/)
*   **Gestione Date**: [date-fns](https://date-fns.org/)

## 💻 Installazione e Sviluppo Locale

Per avviare l'applicazione nel proprio ambiente di sviluppo locale:

1. **Clona il repository**:
   \\\ash
   git clone https://github.com/flam-dev04/zoccoli-crm.git
   cd zoccoli-crm
   \\\

2. **Installa le dipendenze**:
   \\\ash
   npm install
   \\\

3. **Inizializza il Database**:
   \\\ash
   npx prisma generate
   npx prisma db push
   \\\

4. **Avvia il server di sviluppo**:
   \\\ash
   npm run dev
   \\\

L'applicazione sarà disponibile all'indirizzo [http://localhost:3000](http://localhost:3000).

## ☁️ Deploy su Vercel

Questo progetto è configurato per il deploy continuo tramite [Vercel](https://vercel.com).
Durante il processo di build, il comando \
px prisma generate\ viene eseguito automaticamente per garantire l'allineamento del database.

*Nota per l'ambiente di produzione: l'attuale configurazione utilizza SQLite. Poiché Vercel utilizza un file system effimero (Serverless), si raccomanda la migrazione verso un provider di database esterno (es. Supabase o Neon) per la persistenza dei dati.*

## 📝 Roadmap & Sviluppi Futuri

- [x] Setup iniziale e architettura Next.js
- [x] Modellazione Database SQLite e integrazione Prisma
- [x] Sviluppo Dashboard e UI (Bento Grid)
- [x] Deploy su Vercel
- [ ] Migrazione a Database Cloud (PostgreSQL tramite Supabase/Neon)

---
*Progetto generato e assistito tramite l'ecosistema Antigravity.*
