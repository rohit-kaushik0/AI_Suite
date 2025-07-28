# ADmyBRAND AI Suite - Modern SaaS Landing Page

A next-generation landing page for an AI-powered marketing automation platform, built with cutting-edge web technologies and 2025 design trends.

![ADmyBRAND AI Suite](https://via.placeholder.com/1200x600/6366f1/ffffff?text=ADmyBRAND+AI+Suite)

## 🚀 Live Demo

**[View Live Demo →](https://your-demo-link.vercel.app)**

## ✨ Features

### 🎯 Core Sections
- **Hero Section** - Compelling introduction with gradient animations and call-to-actions
- **Interactive Demo** - Video modal with feature showcase and navigation
- **Features Grid** - AI-powered capabilities with animated cards
- **Pricing Calculator** - Interactive sliders with real-time cost calculations
- **Standard Pricing** - Three-tier pricing with annual/monthly toggle
- **Testimonials Carousel** - Auto-rotating customer reviews with navigation
- **Blog & Resources** - Featured articles and downloadable resources
- **FAQ Section** - Collapsible questions with smooth animations
- **Contact Form** - Functional contact form with validation
- **Footer** - Newsletter signup, navigation links, and social media

### 🎨 Design Features
- **2025 Design Trends** - Glassmorphism, subtle animations, modern typography
- **Responsive Design** - Mobile-first approach with seamless breakpoints
- **Advanced Animations** - Framer Motion powered interactions
- **Smooth Scrolling** - Elegant page navigation experience
- **Dark/Light Mode** - Automatic theme switching support
- **Modern Components** - Reusable UI component library

### 🛠 Technical Features
- **Interactive Pricing Calculator** - Real-time calculations with custom sliders
- **Demo Video Modal** - Professional video showcase with controls
- **Form Validation** - React Hook Form with Zod schema validation
- **Performance Optimized** - Fast loading with optimized animations
- **SEO Ready** - Comprehensive meta tags and structured data
- **Accessibility** - WCAG compliant with proper ARIA labels

## 🛠 Tech Stack

- **Framework**: [Next.js 15.4.4](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Components**: Custom component library with [class-variance-authority](https://cva.style/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Geist](https://vercel.com/font) Font Family
- **Deployment**: [Vercel](https://vercel.com/) (recommended)

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/admybrand-ai-suite.git
   cd admybrand-ai-suite/ai_suite
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
pnpm build
pnpm start
```

## 🎨 Component Library

### Core UI Components
- `Button` - Multiple variants (default, destructive, outline, secondary, ghost, link, gradient, glass)
- `Card` - Flexible cards with variants (default, glass, gradient, bordered)
- `Badge` - Status indicators with semantic variants
- `Input/Textarea` - Form inputs with multiple styles
- `Modal` - Animated modals with backdrop blur
- `Slider` - Custom range sliders with real-time values

### Section Components
- `Hero` - Landing page hero with animations
- `Features` - Feature grid with icon cards
- `PricingCalculator` - Interactive pricing tool
- `Pricing` - Standard pricing tiers
- `DemoSection` - Video demo with modal
- `Testimonials` - Carousel with auto-rotation
- `BlogResources` - Article showcase
- `FAQ` - Collapsible question sections
- `Contact` - Contact form with validation
- `Footer` - Site footer with links

## 🎯 Key Features Deep Dive

### Interactive Pricing Calculator
- **Real-time calculations** based on contacts, campaigns, and team size
- **Custom sliders** with smooth animations and value display
- **Dynamic recommendations** based on calculated pricing
- **ROI estimator** showing potential revenue increase

### Demo Video Section
- **Modal video player** with professional styling
- **Feature navigation** with category switching
- **Animated elements** showcasing platform capabilities
- **Multiple viewing options** (Desktop, Mobile, Live Session)

### Advanced Animations
- **Scroll-triggered animations** using Framer Motion
- **Staggered effects** for lists and grids
- **Smooth page transitions** and micro-interactions
- **Performance optimized** with proper animation controls

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy with automatic builds

### Other Platforms
- **Netlify**: Drag & drop the `out` folder after running `pnpm build`
- **GitHub Pages**: Use with static export configuration
- **Railway/Render**: Node.js deployment with build scripts

## 📁 Project Structure

```
ai_suite/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main landing page
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── slider.tsx
│   │   └── ...
│   ├── sections/            # Page sections
│   │   ├── hero.tsx
│   │   ├── features.tsx
│   │   ├── pricing.tsx
│   │   └── ...
│   ├── bonus/               # Advanced features
│   │   ├── pricing-calculator.tsx
│   │   ├── demo-section.tsx
│   │   └── blog-resources.tsx
│   └── navigation/
│       └── navbar.tsx
├── lib/
│   └── utils.ts             # Utility functions
└── public/                  # Static assets
```

## 🎨 Customization

### Colors & Theming
Modify CSS variables in `app/globals.css`:
```css
:root {
  --primary: 220 90% 60%;     /* Blue primary */
  --accent: 280 85% 65%;      /* Purple accent */
  --background: 0 0% 100%;    /* White background */
  /* ... more variables */
}
```

### Content Updates
- Update text content directly in component files
- Modify pricing tiers in `pricing-calculator.tsx`
- Change testimonials in `testimonials.tsx`
- Update FAQ items in `faq.tsx`

### Adding New Sections
1. Create component in `components/sections/`
2. Import and add to `app/page.tsx`
3. Follow existing pattern for animations and styling

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Modern SaaS platforms and design systems
- **UI Libraries**: shadcn/ui component patterns
- **Icons**: Lucide React icon library
- **Animations**: Framer Motion community examples
- **AI Assistance**: Built with AI-powered development workflow

---

**Built with ❤️ and AI assistance**
