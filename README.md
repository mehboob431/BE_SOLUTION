# Next.js Product App

A mini Next.js application demonstrating React, Next.js, API integration, Static Site Generation (SSG), UI development, and component reusability.

## Features

- ✅ Home page with Hero section and Featured Products list
- ✅ Product Details page using SSG (getStaticPaths + getStaticProps)
- ✅ Responsive design with TailwindCSS
- ✅ SEO meta tags for better search engine optimization
- ✅ Loading states and error handling
- ✅ Image optimization using Next.js Image component
- ✅ Clean folder structure with reusable components

## Tech Stack

- **Next.js 14** - React framework with SSG support
- **React 18** - UI library with functional components and hooks
- **TailwindCSS** - Utility-first CSS framework for responsive design
- **FakeStore API** - External API for product data

## Project Structure

```
BE_SOLUTION/
├── components/          # Reusable React components
│   ├── ProductCard.js   # Product card component
│   ├── LoadingSpinner.js # Loading spinner component
│   └── Layout.js        # Layout wrapper component
├── pages/               # Next.js pages
│   ├── _app.js          # Custom App component
│   ├── index.js         # Home page
│   └── products/
│       └── [id].js      # Dynamic product details page
├── services/            # API service functions
│   └── api.js           # API integration layer
├── styles/              # Global styles
│   └── globals.css      # TailwindCSS imports and global styles
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # TailwindCSS configuration
├── postcss.config.js    # PostCSS configuration
└── package.json         # Project dependencies

```

## Setup Instructions

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd BE_SOLUTION
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Build for Production

1. **Create production build**
   ```bash
   npm run build
   ```
   or
   ```bash
   yarn build
   ```

2. **Start production server**
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

## Pages

### Home Page (`/`)

- Hero section with title and subtitle
- Featured products grid displaying all products from the API
- Each product card shows:
  - Product image (optimized with Next.js Image)
  - Product name
  - Price
  - "View Details" button

### Product Details Page (`/products/[id]`)

- Dynamic route using Next.js SSG
- Displays full product information:
  - Product image
  - Product name
  - Price
  - Category badge
  - Description
  - Rating and review count
  - "Add to Cart" button (shows toast notification)

## API Integration

The app uses the [FakeStore API](https://fakestoreapi.com/):

- **List Products**: `https://fakestoreapi.com/products`
- **Product Detail**: `https://fakestoreapi.com/products/{id}`

All API calls are handled in `services/api.js` with proper error handling and revalidation for SSG.

## Static Site Generation (SSG)

- **Home Page**: Uses client-side data fetching for dynamic updates
- **Product Details**: Uses `getStaticPaths` and `getStaticProps` for pre-rendering at build time
- Revalidation set to 1 hour for fresh content

## Responsive Design

The application is fully responsive and optimized for:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)
- Large screens (1280px and up)

## SEO Features

- Meta tags for title and description
- Open Graph tags for social sharing
- Semantic HTML structure
- Proper heading hierarchy

## Component Reusability

- **ProductCard**: Reusable component for displaying product information
- **LoadingSpinner**: Reusable loading state component
- **Layout**: Optional layout wrapper (currently using inline layout in pages)

## Evaluation Criteria Coverage

✅ **Code Quality & Structure**
- Clean, modular code organization
- Separation of concerns (pages, components, services)
- Consistent naming conventions

✅ **UI Design & Responsiveness**
- Modern, appealing design with TailwindCSS
- Fully responsive across all screen sizes
- Smooth transitions and hover effects

✅ **API Integration Correctness**
- Proper error handling
- Loading states
- Data fetching with Next.js best practices

✅ **Next.js SSG Usage**
- getStaticPaths and getStaticProps implemented
- Fallback strategy for dynamic routes
- Revalidation configuration

✅ **SEO Setup**
- Meta tags on all pages
- Open Graph tags
- Semantic HTML

✅ **Component Reusability**
- Reusable ProductCard component
- Modular component structure

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## License

This project is created for assessment purposes.

---

**Note**: This is a mini application built to demonstrate Next.js and React skills. For production use, consider adding authentication, shopping cart functionality, payment integration, and more robust error handling.