# 🚀 Khaled Ahmed Kamal - Portfolio Website

A modern, fully responsive portfolio website showcasing multiple skills in one place. Built with React, Vite, Tailwind CSS, and features complete multilingual support (English & Arabic with RTL).

## ✨ Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Multilingual Support**: Full English and Arabic translations with automatic RTL layout
- **Modern UI**: Glassmorphism design with smooth animations using Framer Motion
- **Project Showcase**: Interactive project gallery with detailed project modals
- **Skills Gallery**: Comprehensive skill categorization with work samples and gallery
- **Achievement Timeline**: Professional achievements and milestones
- **Contact Integration**: Easy-to-use contact form for project inquiries
- **Performance Optimized**: Built with Vite for fast load times and development

## 🛠️ Tech Stack

- **Frontend**: React 18+
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Internationalization**: i18next + react-i18next
- **Animations**: Framer Motion
- **Icons**: React Icons
- **CSS Processing**: PostCSS

## 📂 Project Structure

```
src/
├── components/
│   ├── About.jsx          # About section with CV highlights
│   ├── Achievements.jsx   # Timeline of achievements
│   ├── Contact.jsx        # Contact form and social links
│   ├── Footer.jsx         # Footer with social links
│   ├── Hero.jsx           # Hero section with profile
│   ├── Navbar.jsx         # Navigation with language toggle
│   ├── Projects.jsx       # Featured projects showcase
│   └── Skills.jsx         # Skills categorization and gallery
├── i18n/
│   ├── config.js          # i18n configuration
│   ├── en.json            # English translations
│   └── ar.json            # Arabic translations
├── styles/
│   └── globals.css        # Global styles and design system
├── App.jsx                # Main app component
└── main.jsx               # Entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js 14+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/KhaledAhmedKamal/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## 🌐 Language Support

The portfolio automatically detects and supports:
- **English (EN)** - LTR layout
- **العربية (AR)** - RTL layout

Switch languages using the toggle button in the navbar. Your language preference is saved in localStorage.

## 📋 Key Sections

### Hero Section
Eye-catching introduction with key statistics and call-to-action buttons.

### About
Personal background, education, and unique value proposition highlighting multiple skills in one place.

### Skills
Organized skill categories with full translations:
- Technical Skills: Backend, Database, Architecture, Engineering Workflow
- Non-Technical Skills: Communication, Delivery, Documentation, Professional Strengths

### Projects
Three featured projects with detailed modal views showing:
- Project description and problem statement
- Solution architecture
- Key features breakdown
- Technologies used
- GitHub and demo links

### Achievements
Timeline of professional achievements including:
- Competition rankings
- Programming challenges solved
- Mentoring experience
- Continuous learning

### Work Gallery
Interactive gallery showcasing work samples in categories:
- Presentations & Workshops
- Database Architecture
- Portfolio & Website Projects
- Microsoft Word Documents
- Landing Pages & UI
- Documentation & Reports

### Contact
Direct contact information and social links for professional inquiries.

## 🎨 Design System

### Color Palette
- Primary: Cyan (#22d3ee)
- Secondary: Teal (#14b8a6)
- Accent: Amber (#f59e0b)
- Background: Dark slate (#0f172a)

### Styling Approach
- Utility-first CSS with Tailwind
- Glassmorphism effects with backdrop blur
- Smooth transitions and animations
- Gradient backgrounds and text effects

## 📱 Responsiveness

Built mobile-first approach:
- Desktop: Full feature showcase
- Tablet: Optimized grid layouts
- Mobile: Simplified navigation with hamburger menu

## 🔄 Internationalization

All content is translatable through translation files:
- Navigation items
- Section headings and descriptions
- Project details and achievements
- Form labels and placeholders
- Social links

### Adding New Translations

1. Add translation keys to `src/i18n/en.json` (English)
2. Add corresponding Arabic translations to `src/i18n/ar.json`
3. Use `{t('key.path')}` in React components
4. Changes are automatically applied across the site

## 🚢 Deployment

The `dist/` folder contains the production build ready for deployment to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 📊 Performance

- Optimized build: ~350KB JS (gzipped: ~111KB)
- CSS: ~27KB (gzipped: ~6KB)
- Fast page loads with Vite
- Lazy-loaded images and components
- Optimized animations for performance

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Khaled Ahmed Kamal**
- GitHub: [@KhaledAhmedKamal](https://github.com/KhaledAhmedKamal)
- LinkedIn: [khaled24ahmed](https://linkedin.com/in/khaled24ahmed)
- Email: khaled.ahmed333774@gmail.com

## 🤝 Contributing

Contributions are welcome! Feel free to fork, create issues, and submit pull requests.

---

**Built with ❤️** - A portfolio showcasing one developer with many skills.
