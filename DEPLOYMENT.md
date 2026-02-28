# Vercel Deployment Guide

## ✅ Pre-Deployment Checklist

Your app is now ready for Vercel deployment with:
- ✅ Serverless API function at `/api/contact.ts`
- ✅ Optimized `vercel.json` configuration
- ✅ Vite build setup for static frontend
- ✅ Proper routing for SPA

## 🚀 Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect settings from `vercel.json`

3. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (~1-2 minutes)
   - Your app will be live at `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (production)
vercel --prod
```

## 📁 Project Structure

```
portfolio/
├── api/                    # Vercel Serverless Functions
│   └── contact.ts         # Contact form API endpoint
├── client/                # React frontend source
│   ├── src/
│   └── index.html
├── dist/public/           # Build output (auto-generated)
├── vercel.json           # Vercel configuration
└── vite.config.ts        # Vite build config
```

## ⚙️ Configuration Details

### vercel.json
- **Build Command**: `npm run build:vercel` (runs Vite build)
- **Output Directory**: `dist/public`
- **API Routes**: Automatically detected in `/api` folder
- **SPA Routing**: All routes redirect to `index.html`

### API Endpoints
- `POST /api/contact` - Contact form submission

## 🧪 Test Locally Before Deploying

```bash
# Install dependencies
npm install

# Build the app
npm run build:vercel

# Preview production build locally
npx serve dist/public
```

## 🔧 Environment Variables (if needed)

If you need environment variables:

1. **Local Development**: Create `.env.local`
   ```
   VITE_API_URL=http://localhost:5000
   ```

2. **Vercel Dashboard**: 
   - Go to Project Settings → Environment Variables
   - Add variables for Production/Preview/Development

## 📝 Post-Deployment

After deployment:
1. Test the contact form at `/api/contact`
2. Verify all routes work correctly
3. Check browser console for errors
4. Test on mobile devices

## 🔄 Continuous Deployment

Every push to `main` branch will automatically trigger a new deployment on Vercel.

## 🐛 Troubleshooting

**Build fails?**
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

**API not working?**
- Check `/api/contact.ts` function logs in Vercel dashboard
- Verify API route is being called correctly from frontend

**404 errors?**
- Ensure `vercel.json` rewrites are configured correctly
- Check that build output is in `dist/public`

## 📚 Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Serverless Functions](https://vercel.com/docs/functions)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
