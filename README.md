# 🚀 Modern Full-Stack / MERN Developer Portfolio

An ultra-sleek, responsive, and production-ready portfolio built with **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS**, and **TypeScript**. Tailored specifically for Full-Stack and MERN developers to showcase real-world web apps, REST APIs, and database engineering.

---

## 🌟 Key Features

- **⚡ Modern Tech Stack**: Next.js 15 App Router, React 19, Tailwind CSS v4, TypeScript.
- **🎨 Glassmorphic & Glowing Dark UI**: High-contrast, radiant gradients, tech grid patterns, and modern typography.
- **📱 Fully Responsive**: Pixel-perfect layout across mobile, tablet, laptop, and 4K displays.
- **💻 Interactive Hero Section**:
  - Availability status badge ("Available for Hire & Freelance Projects")
  - Live developer config terminal preview
  - High-impact CTA buttons (*Explore Projects*, *Contact Me*, *Resume*)
  - Quick performance stats row
- **🛠️ Technical Competencies & Skills**:
  - Categorized under *Frontend*, *Backend*, *Databases*, and *Tools & DevOps*
  - Interactive category filtering with visual mastery bars
- **📂 Filterable Projects Showcase**:
  - Filter by *All Projects*, *MERN Stack*, *Full-Stack & Next.js*, and *Backend & APIs*
  - Includes architecture metrics (*Endpoints*, *Lighthouse Score*, *Stack*)
  - Direct links to **Live Demo**, **GitHub Client**, and **GitHub Server** repositories
  - Interactive **Deep-Dive Architecture Modal**
- **💼 Core Services & Value Proposition**: Full-stack web apps, REST API design, database schema modeling, and performance optimization.
- **🎓 Journey & Milestones Timeline**: Educational credentials, professional training, and hands-on milestones.
- **✉️ Working Contact Section**:
  - Full client-validated contact form connected to `/api/contact`
  - Direct one-click copy email button
  - Frequently Asked Questions (FAQ) preview
- **⚙️ Centralized Configuration**: Easy one-file customization via [`src/data/portfolioData.ts`](./src/data/portfolioData.ts).

---

## 🛠️ Project Structure

```text
my-protfolio/
├── public/                 # Static assets & icons
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/    # Contact form API route handler (POST /api/contact)
│   │   ├── globals.css     # Dark palette, glassmorphism & gradient utilities
│   │   ├── layout.tsx      # Root layout, metadata & viewport settings
│   │   └── page.tsx        # Single-page assembled portfolio
│   ├── components/
│   │   ├── icons/          # SVG brand icons (GitHub, LinkedIn, Twitter)
│   │   ├── Navbar.tsx      # Sticky blur navbar with active scroll indicators
│   │   ├── Hero.tsx        # Hero with code terminal preview & stats
│   │   ├── About.tsx       # Bio, philosophy & profile snapshot
│   │   ├── Skills.tsx      # Interactive skill matrix & proficiency meters
│   │   ├── Projects.tsx    # Filterable project gallery
│   │   ├── ProjectModal.tsx# Architecture & case study modal
│   │   ├── Services.tsx    # Core offerings & deliverables
│   │   ├── Timeline.tsx    # Experience & education milestones
│   │   ├── Contact.tsx     # Validated contact form & direct reach-out
│   │   └── Footer.tsx      # Back-to-top, copyright & social links
│   └── data/
│       └── portfolioData.ts# 👈 All portfolio content (edit your info here!)
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### 1. Run the Development Server

In PowerShell or command prompt (using `npm.cmd` on Windows if scripts are restricted):

```bash
npm run dev
# or
npm.cmd run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view your live portfolio.

### 2. Build for Production

```bash
npm run build
# or
npm.cmd run build
```

---

## ✏️ How to Personalize Your Portfolio

All your details, links, projects, and skills are stored in a single file:
👉 **[`src/data/portfolioData.ts`](./src/data/portfolioData.ts)**

1. **Personal Information**:
   - Change `name`, `headline`, `location`, `email`, `phone`
   - Update your social profiles: `githubUrl`, `linkedinUrl`, `twitterUrl`
   - Replace `resumeUrl` with your actual Google Drive or hosted PDF link
2. **Projects**:
   - Update `title`, `description`, `features`, `tags`
   - Add your own `liveUrl`, `githubClient`, and `githubServer` links
3. **Skills**:
   - Tweak skills and percentage proficiency bars according to your comfort level
4. **Timeline**:
   - Add your educational background, training batches, and work experience

---

## 🚢 Deployment

You can deploy this portfolio for free in under 2 minutes:

- **Vercel** *(Recommended for Next.js)*:
  1. Push this folder to your GitHub repository.
  2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
  3. Import your repository and click **Deploy**.
- **Netlify / Render**:
  - Build command: `npm run build`
  - Output directory: `.next`
