# React App - Vercel Deployment

This project has been converted from a Replit full-stack app to a React app optimized for Vercel deployment.

## 🚀 Quick Deploy

### Deploy to Vercel (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Deploy to Vercel"
   git push origin main
   ```

2. **Import to Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Click Deploy (settings auto-detected)

3. **Done!** Your app will be live at `https://your-project.vercel.app`

### Deploy via CLI
```bash
npm i -g vercel
vercel --prod
```

## 💻 Local Development

```bash
npm install
npm run dev:client
```

Open [http://localhost:5173](http://localhost:5173)

## 🧪 Test Production Build

```bash
npm run build:vercel
npm run preview
```

## 📁 Project Structure

```
├── api/             # Vercel Serverless Functions
│   └── contact.ts   # Contact form API
├── client/          # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── index.html
├── dist/public/     # Build output
├── vercel.json      # Vercel configuration
└── vite.config.ts   # Vite build config
```

## ⚙️ Configuration

- **Build Command**: `npm run build:vercel`
- **Output Directory**: `dist/public`
- **Dev Command**: `npm run dev:client`
- **API Endpoint**: `POST /api/contact`

## 📚 Documentation

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment guide and troubleshooting.

## 🔧 Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + Framer Motion
- **API**: Vercel Serverless Functions
- **Deployment**: Vercel
