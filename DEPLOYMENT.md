# Step-by-Step Guide to Deploy Your Portfolio on Vercel

This guide will walk you through deploying your Next.js portfolio website to Vercel.

## Prerequisites

- A GitHub account
- Your code pushed to a GitHub repository
- Node.js installed locally (for testing)

---

## Method 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Push Your Code to GitHub

1. **Create a GitHub repository** (if you haven't already):
   - Go to [github.com](https://github.com)
   - Click the "+" icon in the top right
   - Select "New repository"
   - Name it (e.g., "portfolio" or "spiderman-portfolio")
   - Make it **Public** or **Private** (your choice)
   - **Do NOT** initialize with README, .gitignore, or license (since you already have files)
   - Click "Create repository"

2. **Push your code to GitHub**:
   ```bash
   # Navigate to your project directory
   cd /Users/apple/Spiderman
   
   # Initialize git (if not already done)
   git init
   
   # Add all files
   git add .
   
   # Commit your changes
   git commit -m "Initial commit - Portfolio website"
   
   # Add your GitHub repository as remote (replace YOUR_USERNAME and YOUR_REPO_NAME)
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   
   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

### Step 2: Sign Up / Sign In to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** or **"Log In"**
3. Choose **"Continue with GitHub"** (recommended - easiest way)
4. Authorize Vercel to access your GitHub account

### Step 3: Import Your Project

1. Once logged in, you'll see the Vercel dashboard
2. Click the **"Add New..."** button (or **"Import Project"**)
3. You'll see a list of your GitHub repositories
4. Find your portfolio repository and click **"Import"**

### Step 4: Configure Project Settings

Vercel will auto-detect Next.js. The settings should be:

- **Framework Preset**: Next.js (auto-detected)
- **Root Directory**: `./` (leave as default)
- **Build Command**: `npm run build` (auto-filled)
- **Output Directory**: `.next` (auto-filled)
- **Install Command**: `npm install` (auto-filled)

**Just click "Deploy"** - no changes needed!

### Step 5: Wait for Deployment

1. Vercel will:
   - Install dependencies (`npm install`)
   - Build your project (`npm run build`)
   - Deploy it to a live URL
   
2. This usually takes **1-3 minutes**

3. You'll see a success message with your deployment URL:
   - Example: `https://your-project-name.vercel.app`
   - Or a custom domain if you set one up

### Step 6: Access Your Live Site

- Click on the deployment URL to see your live portfolio
- Your site is now live on the internet! 🎉

---

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

This will open a browser window to authenticate.

### Step 3: Deploy from Your Project Directory

```bash
# Navigate to your project
cd /Users/apple/Spiderman

# Deploy
vercel
```

### Step 4: Follow the Prompts

- **Set up and deploy?** → Yes
- **Which scope?** → Select your account
- **Link to existing project?** → No (first time)
- **Project name?** → Press Enter (uses folder name) or type a custom name
- **In which directory is your code located?** → `./` (press Enter)
- **Override settings?** → No (press Enter)

### Step 5: Production Deployment

After the first deployment, deploy to production:

```bash
vercel --prod
```

---

## Post-Deployment Steps

### 1. Automatic Deployments

- Every time you push code to your GitHub repository's `main` branch, Vercel will automatically rebuild and deploy your site
- You can see deployment history in the Vercel dashboard

### 2. Custom Domain (Optional)

1. Go to your project in Vercel dashboard
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain (e.g., `yourname.com`)
4. Follow Vercel's instructions to configure DNS

### 3. Environment Variables (If Needed)

If you add environment variables later:

1. Go to **Settings** → **Environment Variables**
2. Add your variables
3. Redeploy (or they'll be used in the next deployment)

---

## Troubleshooting

### Build Errors

If deployment fails:

1. **Test locally first**:
   ```bash
   npm run build
   ```
   Fix any errors that appear

2. **Check Vercel logs**:
   - Go to your project in Vercel dashboard
   - Click on the failed deployment
   - Check the build logs for errors

### Common Issues

1. **Module not found errors**:
   - Make sure all dependencies are in `package.json`
   - Run `npm install` locally to verify

2. **TypeScript errors**:
   - Fix TypeScript errors locally first
   - Run `npm run build` to catch them

3. **Build timeout**:
   - Usually not an issue for small projects
   - Contact Vercel support if it happens

---

## Quick Checklist

Before deploying, make sure:

- [ ] Your code is pushed to GitHub
- [ ] `package.json` has all dependencies
- [ ] `npm run build` works locally (no errors)
- [ ] All environment variables are set (if any)
- [ ] Your `.gitignore` includes `node_modules` and `.next`

---

## Your Deployment URL Format

After deployment, your site will be available at:
- `https://your-project-name.vercel.app`
- Or a custom domain if you set one up

---

## Need Help?

- Vercel Documentation: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- Next.js Deployment: https://nextjs.org/docs/deployment

---

**Congratulations! Your portfolio is now live on Vercel! 🚀**


