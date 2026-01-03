# GDG on Campus - University of Primorska Website

A modern, developer-focused website for the Google Developer Group on Campus at University of Primorska, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Terminal-inspired aesthetic with Google Developer brand colors
- **Fully Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Built with Next.js 14 App Router for optimal performance
- **Animated**: Smooth animations with Framer Motion
- **Type Safe**: Full TypeScript support
- **SEO Friendly**: Optimized metadata and semantic HTML

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- Git

## 🛠️ Installation

### 1. Create Next.js Project

```bash
npx create-next-app@latest gdg-primorska --typescript --tailwind --app
cd gdg-primorska
```

When prompted, select:
- ✅ TypeScript
- ✅ ESLint
- ✅ Tailwind CSS
- ✅ `src/` directory: **No**
- ✅ App Router: **Yes**
- ✅ Import alias: **Yes** (@/*)

### 2. Install Dependencies

```bash
npm install framer-motion lucide-react clsx tailwind-merge
```

### 3. Project Structure

Create the following directory structure:

```
gdg-primorska/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── about/
│   │   └── page.tsx
│   ├── events/
│   │   └── page.tsx
│   ├── team/
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   ├── blog/
│   │   └── page.tsx
│   └── resources/
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   ├── UpcomingEvents.tsx
│   │   └── TechStack.tsx
│   └── ui/
│       ├── Button.tsx
│       └── Card.tsx
├── lib/
│   ├── data/
│   │   ├── events.ts
│   │   ├── team.ts
│   │   └── projects.ts
│   └── utils/
│       └── helpers.ts
├── public/
│   ├── images/
│   ├── team/
│   └── events/
└── types/
    └── index.ts
```

### 4. Copy Files

Copy the provided files into your project:

1. **Configuration Files**:
    - `package.json`
    - `tailwind.config.ts`
    - `tsconfig.json`

2. **Type Definitions**:
    - `types/index.ts`

3. **Utilities & Data**:
    - `lib/utils/helpers.ts`
    - `lib/data/team.ts`
    - `lib/data/events.ts`

4. **Layout Components**:
    - `app/layout.tsx`
    - `app/globals.css`
    - `components/layout/Header.tsx`
    - `components/layout/Footer.tsx`
    - `components/layout/Navigation.tsx`

5. **Home Page**:
    - `app/page.tsx`
    - `components/home/Hero.tsx`
    - `components/home/Stats.tsx`
    - `components/home/UpcomingEvents.tsx`
    - `components/home/TechStack.tsx`

6. **Other Pages**:
    - `app/events/page.tsx`
    - `app/team/page.tsx`

### 5. Add Team Member Images

Place your team member images in `public/team/` with these names:
- `zhivko.png`
- `emilija.jpg`
- `tea.jpeg`
- `david.jpeg`
- `anastasija.jpg`
- `luka.jpeg`
- `naume.jpeg`
- `katja.jpg`
- `ilija.jpg`

### 6. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your website!

## 📄 Pages Overview

### ✅ Completed Pages

1. **Homepage** (`/`)
    - Hero section with animated background
    - Community stats
    - Upcoming events carousel
    - Tech stack showcase

2. **Events Page** (`/events`)
    - Event filtering (upcoming/past, by type)
    - Event cards with details
    - Registration links

3. **Team Page** (`/team`)
    - Team member profiles
    - Social media links
    - Join team CTA

### 🚧 To Be Implemented

4. **Projects Page** (`/projects`)
    - Showcase community projects
    - GitHub integration
    - Project filters and search

5. **Blog Page** (`/blog`)
    - Tech articles
    - Event recaps
    - Tutorials

6. **About Page** (`/about`)
    - Mission and vision
    - History
    - Partners
    - Contact information

7. **Resources Page** (`/resources`)
    - Learning materials
    - Workshop recordings
    - Useful links

## 🎨 Customization

### Colors

The project uses Google Developer brand colors defined in `tailwind.config.ts`:

```typescript
colors: {
  google: {
    blue: '#4285F4',
    red: '#EA4335',
    yellow: '#FBBC04',
    green: '#34A853',
  }
}
```

### Fonts

Two font families are used:
- **JetBrains Mono**: For code-like elements (headers, terminals)
- **Inter**: For body text

### Adding New Events

Edit `lib/data/events.ts`:

```typescript
{
  id: 'unique-id',
  title: 'Event Title',
  description: 'Event description',
  date: '2026-01-15',
  time: '18:00',
  location: 'FAMNIT',
  type: 'Workshop',
  image: '/events/event-image.jpg',
  registrationLink: 'https://...',
  tags: ['Tag1', 'Tag2'],
  isPast: false,
}
```

### Adding Team Members

Edit `lib/data/team.ts`:

```typescript
{
  id: 'unique-id',
  name: 'Full Name',
  role: 'Position',
  company: 'Company Name (optional)',
  image: '/team/photo.jpg',
  github: 'https://github.com/username',
  linkedin: 'https://linkedin.com/in/username',
}
```

## 🔧 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically!

### Other Platforms

The site can be deployed on:
- Netlify
- Railway
- AWS Amplify
- Your own server

## 🌐 Environment Variables

Create a `.env.local` file for sensitive data:

```env
# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Email (optional)
CONTACT_EMAIL=gdgoncampus.up@gmail.com
```

## 📝 Content Management

### Option 1: Static Files (Current)
- Events and team data in `lib/data/*.ts`
- Simple, no backend needed
- Perfect for small teams

### Option 2: CMS Integration (Future)
Consider integrating:
- **Contentful**: For blog posts
- **Notion**: For events and resources
- **Strapi**: Self-hosted CMS
- **Sanity**: Real-time collaboration

## 🔍 SEO Optimization

The site includes:
- ✅ Semantic HTML
- ✅ Meta tags in `layout.tsx`
- ✅ OpenGraph tags for social sharing
- ✅ Sitemap generation
- ✅ Robots.txt

### Adding OpenGraph Images

Create `app/opengraph-image.png` (1200x630px) for social sharing previews.

## 📱 Progressive Web App (PWA)

To make your site installable:

```bash
npm install next-pwa
```

Create `next.config.js`:

```javascript
const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  // your config
})
```

## 🐛 Troubleshooting

### Images Not Loading

Make sure images are in the correct `public/` directory and paths start with `/`.

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Type Errors

Ensure all imports match the file structure and TypeScript is configured correctly.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📧 Contact

- **Email**: gdgoncampus.up@gmail.com
- **Instagram**: @gdsc.primorska
- **Website**: [gdg.community.dev](https://gdg.community.dev/gdg-on-campus-university-of-primorska-koper-slovenia/)

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Google Developer Groups
- University of Primorska - FAMNIT
- Student Council
- All our amazing team members and community

---

**Built with ❤️ by GDG on Campus Primorska**

For questions or support, reach out to the team lead: [Zhivko Stoimchev](https://github.com/zstoimchev)