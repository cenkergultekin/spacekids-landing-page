# Employment Hero Landing Page

A modern, responsive SaaS landing page built with Next.js, React, TailwindCSS, and Framer Motion. This project replicates the design and functionality of the Employment Hero website with smooth animations and interactive elements.

## 🚀 Features

- **Modern Design**: Clean, professional design with purple gradient theme
- **Responsive Layout**: Fully responsive across all devices
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Interactive Elements**: Hover effects, parallax scrolling, and scroll-triggered animations
- **Performance Optimized**: Built with Next.js for optimal performance
- **Accessible**: WCAG compliant with proper semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Font**: Inter (Google Fonts)

## 📋 Sections Included

1. **Header** - Sticky navigation with logo and menu
2. **Hero Section** - Main headline with parallax hero image
3. **Feature Overview** - Three cards for different user types
4. **Partner Logos** - Auto-scrolling carousel of partner logos
5. **Platform Showcase** - Interactive product screenshot with tooltips
6. **Workforce Management** - Feature highlights with product mockup
7. **Customer Spotlight** - Testimonial with parallax background
8. **Statistics Section** - Animated counters with scroll trigger
9. **FAQ Section** - Collapsible accordion questions
10. **Final CTA** - Call-to-action with parallax illustration
11. **Footer** - Comprehensive footer with links and social media

## 🎨 Design Features

- **Color Palette**: Purple gradient (#6C2BD9 → #A855F7), white backgrounds, black headings
- **Typography**: Inter font family for clean, modern look
- **Animations**: 
  - Parallax effects on hero image and illustrations
  - Scroll reveal animations for sections
  - Count-up animations for statistics
  - Hover scale-up effects on cards
  - Auto-scrolling partner logos carousel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd spacekids
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
spacekids/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── HeroSection.tsx      # Hero section with parallax
│   ├── FeatureOverview.tsx  # Feature cards
│   ├── PartnerLogos.tsx     # Auto-scrolling carousel
│   ├── PlatformShowcase.tsx # Product screenshot with tooltips
│   ├── WorkforceManagement.tsx # Feature highlights
│   ├── CustomerSpotlight.tsx   # Testimonial section
│   ├── StatisticsSection.tsx   # Animated statistics
│   ├── FAQSection.tsx       # Accordion FAQ
│   ├── FinalCTA.tsx         # Final call-to-action
│   └── Footer.tsx           # Footer with links
├── tailwind.config.js       # TailwindCSS configuration
├── next.config.js           # Next.js configuration
├── package.json             # Dependencies and scripts
└── README.md               # Project documentation
```

## 🎯 Key Animations

### Parallax Effects
- Hero section image
- Customer spotlight background icon
- Final CTA illustration

### Scroll Reveal
- Fade-in and slide-up animations for sections
- Triggered when elements come into view

### Interactive Elements
- Hover scale-up on cards and buttons
- Count-up animation for statistics
- Auto-scrolling partner logos
- Accordion FAQ interactions

### Micro-interactions
- Button hover effects with shadow and scale
- Icon rotations and color transitions
- Smooth page transitions

## 🎨 Customization

### Colors
Update the color palette in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#A855F7',
    600: '#9333EA',
    // ... more shades
  }
}
```

### Animations
Modify animation timing and effects in individual components using Framer Motion.

### Content
Update text content, images, and links in the respective component files.

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 Development

### Adding New Sections
1. Create a new component in the `components/` directory
2. Import and add it to `app/page.tsx`
3. Follow the existing animation patterns

### Styling Guidelines
- Use TailwindCSS utility classes
- Follow the established color palette
- Maintain consistent spacing and typography
- Ensure responsive design

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
Build the project and deploy the `out/` directory to any static hosting service.

## 📄 License

This project is for educational purposes. The design is inspired by Employment Hero's website.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or issues, please open an issue in the repository.

---

**Built with ❤️ using Next.js, React, TailwindCSS, and Framer Motion**
