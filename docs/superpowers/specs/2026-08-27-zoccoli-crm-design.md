# Zoccoli CRM - System Design Spec

## Overview
A custom CRM for managing bespoke clog (zoccoli su misura) orders. The system processes incoming orders, tracks due dates with visual urgency indicators, and visualizes sales growth over time. 
The architecture is designed to be local-first initially (SQLite), but structured for a seamless future migration to Supabase and Vercel.

## Architecture & Backend
- **Framework**: Next.js (App Router).
- **Database**: SQLite (local database file).
- **ORM**: Prisma for type-safe database interactions.
- **Security & Version Control**: The codebase will be initialized as a Git repository intended for a private GitHub repo. The SQLite database file (dev.db) will be strictly added to .gitignore to prevent sensitive customer data from being uploaded to GitHub.

### Data Model
**Order**
- id: String (UUID)
- description: String (Details of the custom clog)
- dueDate: DateTime (Deadline for the order)
- completed: Boolean (Default: false)
- createdAt: DateTime (Default: now())

## Frontend Design & UI/UX
The UI will strictly adhere to the guidelines set by the rontend-design and ui-ux-pro-max skills to ensure a high-craft, professional aesthetic.

### Aesthetic Direction
- **Layout**: Bento Grid for the dashboard, maximizing screen real estate cleanly.
- **Color Palette**: Minimalist. Off-blacks (#0F172A) for text, off-whites (#F8FAFC) for backgrounds. 
- **Typography**: Geometric sans-serif for headings (tight line-height), readable sans-serif for body.
- **Spacing**: Strict 4px/8px baseline grid. Content separated by whitespace rather than heavy borders or nested cards.

### Core Components
1. **Active Orders Dashboard (CRM)**
   - Displays all orders where completed == false.
   - **Dynamic Urgency Alert**: The UI will parse the dueDate. 
     - > 7 days: Standard neutral styling.
     - 3-7 days: Warning styling (e.g., subtle yellow/orange indicator).
     - < 3 days / Overdue: Critical styling (bold red typography/accents).
   - **Completion Interaction**: A prominent, interactive checkbox. When clicked, it updates the database, applying a transition effect before removing the order from the active view.

2. **Sales Analytics (Vector Chart)**
   - Utilizes echarts for crisp, scalable SVG vector diagrams.
   - Plots cumulative completed orders over time.
   - Remains persistent on the dashboard to visualize growth, fed only by orders where completed == true.

3. **Order Entry Form**
   - A clean, accessible form to manually enter new orders (description and date picker for due date) for real-world testing and usage before future Instagram API integrations.

## Future Roadmap
- Replace local SQLite with Supabase Postgres.
- Deploy Next.js frontend to Vercel.
- Integrate official Instagram Graph API to automate order ingestion.
