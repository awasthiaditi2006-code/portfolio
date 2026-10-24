# Aditi Awasthi — Personal Portfolio Website

A responsive personal portfolio website for **Aditi Awasthi**, specializing in **Finance, Data Analytics, and Business Operations**. Built with React 19, TypeScript, Vite, and Tailwind CSS v4.

---

## Features

- **Verified Data**: 100% curated from Aditi Awasthi's professional resume.
- **Dual Language Support**: Seamless English (`EN`) and Hindi (`हिन्दी`) switching across all sections, roles, and case studies.
- **Dark / Light Modes**: Default editorial dark theme with warm ivory/champagne gold accents, fully persistent in `localStorage`.
- **Monogram Intro**: An intro with the monogram and fine champagne-gold line, skippable and accessible.
- **Genuine Resume Experience**:
  - Interactive PDF modal viewer directly embedding the official resume.
  - Direct 1-click download with clean filename (`Aditi_Awasthi_Professional_Resume.pdf`).
- **Filterable Projects & Research**:
  - *Organisation of Tomorrow: Workplace at 2050* (People, Progress, Planet).
  - *Reliance Bazaar Retail Operations & Inventory Study*.
  - *Climate Change Induced Disasters: Remote Sensing Study (IIRS–ISRO Course 185)*.
  - *AI in Accounting & Financial Data Analytics (IIM Bangalore / NPTEL)*.
- **Categorized Skills**: Categorized under Finance & Accounts, Data & Analytics, Operations & Retail, and Strategy & Communication without fake percentage bars.
- **Achievements & Impact**: 1st Runner-Up at Case-O-Mania, 3rd Rank at International Poster Presentation, Gaurav Jain Workshop, and ISRO Certification.
- **Direct Contact**: 1-click email copy (`awasthiaditi2006@gmail.com`), direct mailto, and LinkedIn profile link.
- **Photo Customization**: Built-in photo uploader allowing instant live preview and persistence of a personal portrait.
- **GitHub Pages Ready**: Includes turnkey `.github/workflows/deploy.yml` for automated deployment upon push to GitHub.

---

## Deploying to GitHub Pages

### Option A: Automatic Deployment via GitHub Actions (Recommended)

1. Create a new public repository on GitHub (e.g. `portfolio` or `<your-username>.github.io`).
2. Push your project code:
   ```bash
   git init
   git add .
   git commit -m "feat: initial portfolio for Aditi Awasthi"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
3. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment > Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build and publish your site!

---

## Local Development

```bash
# Install dependencies
npm install

# Start development server (Port 3000)
npm run dev

# Build for production
npm run build

# Run TypeScript checks
npm run lint
```

---

## Customizing Portfolio Content

All personal details, experiences, case studies, and translations are centralized in:
`src/data/portfolioData.ts`

- **Update Resume PDF**: Replace `/public/resume.pdf` with any new PDF.
- **Toggle Availability Badge**: Set `isOpenToOpportunities: true` or `false` in `src/data/portfolioData.ts`.
- **Update Social Links**: Edit `socials.linkedin`, `socials.email`, or `socials.github`.
