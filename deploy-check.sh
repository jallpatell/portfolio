#!/bin/bash
# Vercel Deployment Script
# Run this before deploying to ensure everything is ready

echo "🔍 Pre-Deployment Checklist"
echo "============================"
echo ""

# Check if node_modules exists
if [ -d "node_modules" ]; then
  echo "✅ Dependencies installed"
else
  echo "❌ Dependencies not installed. Run: npm install"
  exit 1
fi

# Test build
echo ""
echo "🏗️  Testing production build..."
npm run build:vercel

if [ $? -eq 0 ]; then
  echo "✅ Build successful"
else
  echo "❌ Build failed. Fix errors before deploying."
  exit 1
fi

# Check if dist/public exists
if [ -d "dist/public" ]; then
  echo "✅ Build output exists at dist/public"
else
  echo "❌ Build output not found"
  exit 1
fi

# Check if api directory exists
if [ -d "api" ]; then
  echo "✅ API functions directory exists"
else
  echo "⚠️  No API functions found"
fi

# Check if vercel.json exists
if [ -f "vercel.json" ]; then
  echo "✅ vercel.json configuration exists"
else
  echo "❌ vercel.json not found"
  exit 1
fi

echo ""
echo "✅ All checks passed!"
echo ""
echo "📦 Ready to deploy to Vercel!"
echo ""
echo "Next steps:"
echo "1. Push to GitHub: git add . && git commit -m 'Deploy' && git push"
echo "2. Go to vercel.com/new and import your repository"
echo "   OR"
echo "   Run: vercel --prod"
echo ""
