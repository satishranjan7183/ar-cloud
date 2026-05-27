# AR CLOUD IT Trainings - Professional Website

A fully-featured, production-ready website for AR CLOUD IT Trainings built with React, TypeScript, Tailwind CSS, and Supabase.

## Features

### Pages
- **Home**: Hero section, features overview, course specializations, statistics
- **About Us**: Company story, core values, expert faculty, learning ecosystem
- **Courses**: Complete course catalog with details, topics, pricing, and enrollment
- **Demo Class**: Booking form with date/time selection and form validation
- **Contact Us**: Contact form with multiple contact methods (phone, email, WhatsApp)
- **Student Reviews**: Display reviews, rating system, and review submission form

### Core Functionality
- Responsive design optimized for mobile, tablet, and desktop
- Supabase integration for data persistence
- Contact form submission and management
- Demo class booking system
- Student review collection and display
- WhatsApp integration for quick communication
- Beautiful UI with Tailwind CSS and Lucide React icons
- Full TypeScript type safety

### Technical Stack
- React 18.3.1
- TypeScript
- Tailwind CSS 3.4.1
- Vite
- React Router DOM
- Supabase (@supabase/supabase-js)
- Lucide React (icons)

## Quick Start

### Prerequisites
- Node.js 16+ and npm
- Supabase project (automatically available)

### Installation

```bash
# Install dependencies
npm install

# Development server (will start automatically)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx        # Navigation bar with responsive menu
│   └── Footer.tsx        # Footer with contact info
├── pages/
│   ├── Home.tsx          # Homepage with hero and features
│   ├── About.tsx         # About company page
│   ├── Courses.tsx       # Courses catalog
│   ├── Demo.tsx          # Demo class booking
│   ├── Contact.tsx       # Contact form
│   └── Reviews.tsx       # Student reviews
├── lib/
│   └── supabase.ts       # Supabase client and helper functions
├── App.tsx               # Main app with routing
├── main.tsx              # React DOM entry point
└── index.css             # Global Tailwind styles
```

## Database Schema

### Tables

#### demo_bookings
- Stores demo class booking requests
- Fields: id, name, email, phone, course, preferred_date, preferred_time, created_at

#### contact_inquiries
- Stores contact form submissions
- Fields: id, name, email, phone, subject, message, created_at

#### student_reviews
- Stores student reviews and ratings
- Fields: id, name, course, rating, review, created_at

All tables have Row Level Security (RLS) enabled for security.

## Environment Variables

The following environment variables are automatically configured:
- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Supabase anonymous public key

These are available in your project's `.env` file.

## Features Implemented

### Home Page
- Hero section with clear CTA buttons
- Why Choose AR CLOUD section with feature cards
- Specializations grid (8 courses)
- Statistics section showing: students trained, placement rate, expert trainers, specializations
- Call-to-action sections with links to demo booking

### Courses Page
- Complete course catalog with 8+ specializations
- Each course card includes: icon, description, duration, level, student count, price, topics
- Special programs section (Bootcamp, Corporate Training)
- Course-to-demo linking

### Demo Class Page
- Professional booking form
- All required fields: name, email, phone, course selection
- Date and time slot selection
- Success/error messaging
- Form validation and submission to Supabase

### Contact Page
- Contact information display (phone, email, location)
- Comprehensive contact form
- Business hours information
- Quick access links (WhatsApp, call, demo booking)
- Message submission to Supabase

### Reviews Page
- Display all student reviews with ratings
- Overall rating calculation (average of all reviews)
- Review submission form
- Star rating input
- Course selection for reviews
- Real-time review display after submission

### Navigation
- Sticky navbar with responsive mobile menu
- Footer with all contact information
- WhatsApp integration throughout the site (+91 8002604589)

## Contact Information

- **Phone**: +91 8002604589
- **Email**: learn.devopsnss@gmail.com
- **WhatsApp**: Available throughout the site
- **Location**: India

## Courses Offered

1. Cloud Computing Fundamentals
2. DevOps Mastery
3. Kubernetes & Container Orchestration
4. AWS Solutions Architect
5. Microsoft Azure Fundamentals
6. Linux Administration Pro
7. Python for DevOps & Automation
8. AI Tools & Automation

## Design Features

- Modern, professional design with blue and navy color scheme
- Smooth transitions and hover effects
- Clear visual hierarchy with proper spacing
- Responsive breakpoints for all screen sizes
- Accessible form elements with proper labels
- High contrast text for readability
- Icons from Lucide React for visual consistency

## Deployment

The website is ready for production deployment:

```bash
# Build for production
npm run build

# The dist/ directory contains the production-ready files
```

The production build includes:
- Optimized CSS and JavaScript bundles
- Minified assets
- Proper tree-shaking of unused code

## Future Enhancements

- Email notifications for bookings and inquiries
- Admin dashboard for managing courses and inquiries
- Student portal with course progress tracking
- Payment integration for course enrollment
- Search and filter functionality for courses
- Blog section for learning resources

## Support

For support or questions, contact:
- Phone: +91 8002604589
- Email: learn.devopsnss@gmail.com
- WhatsApp: +91 8002604589

---

Built with ❤️ for AR CLOUD IT Trainings
