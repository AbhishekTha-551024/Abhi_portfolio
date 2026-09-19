# 🚀 Portfolio Setup Instructions for Abhishek Singh

## 📋 **Step 1: Install Dependencies**

Run this command in your terminal:

```bash
npm install
```
*(or `pnpm install` if you use pnpm)*

This will install the Groq AI SDK (`@ai-sdk/groq`), Vercel AI SDK, Next.js, and other dependencies.

## 🔐 **Step 2: Set Up Environment Variables**

Create a file named `.env.local` in your project root with this content:

```env
# Groq AI API Configuration (Llama 3.3 70B)
# Get your free key at: https://console.groq.com/keys
GROQ_API_KEY=your_actual_groq_api_key_here

# Environment
NODE_ENV=development
```

**Replace `your_actual_groq_api_key_here` with your real Groq API key (starts with `gsk_`).**

## 🎯 **Step 3: Test Locally**

Run the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` to test your portfolio and interact with the AI chat!

## 🚀 **Step 4: Deploy to Vercel**

1. **Push to GitHub**
2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository (`Abhi_portfolio`)
   - Add Environment Variable:
     - Key: `GROQ_API_KEY`
     - Value: your Groq API key
3. **Deploy!**

## ✅ **AI Model & Features:**

- ⚡ **Model**: `llama-3.3-70b-versatile` running via **Groq LPU** (lightning-fast responses)
- 🛠️ **Function Calling / Tools**: Automatically renders projects, resume, skills, and contact info
- 🗣️ **Animated Memoji**: Video avatar talks in real time as the AI streams responses
