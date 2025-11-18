# OSLRAT Website

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Open-Source Sea-Level Rise Assessment Tool**

A modern, responsive static website for the OSLRAT project - empowering researchers, policymakers, and communities with accessible, science-based tools to visualize and assess coastal climate risks.

## 🌊 Overview

This repository contains the complete static website for OSLRAT, built with modern web standards and designed for optimal performance, accessibility, and user experience. The site is fully responsive, works across all devices, and is ready for deployment to static hosting platforms like GitHub Pages.

## ✨ Features

- **Modern Design**: Clean, professional interface with ocean-inspired color palette
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Fast Performance**: Lightweight, optimized assets with no build process required
- **Accessible**: WCAG 2.1 AA compliant with semantic HTML and ARIA labels
- **SEO Optimized**: Proper meta tags, semantic structure, and social media cards
- **Smooth Animations**: Purposeful, performance-optimized animations and transitions
- **Interactive Elements**: Dynamic navigation, scroll effects, and form handling

## 📁 Project Structure

```
OSLRAT/
├── index.html              # Homepage
├── about.html              # About the project
├── methodology.html        # Scientific methodology
├── documentation.html      # Usage documentation
├── contact.html            # Contact and collaboration
├── css/
│   └── styles.css         # Complete stylesheet with design system
├── js/
│   └── script.js          # Interactive functionality
├── assets/
│   ├── images/            # Image assets (add your images here)
│   └── icons/             # Icon assets
└── README.md              # This file
```

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/OSLRAT.git
   cd OSLRAT
   ```

2. **Open in browser**

   Simply open `index.html` in your web browser. No build process or server required!

   Or use a local server for development:
   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Node.js http-server
   npx http-server

   # Using PHP
   php -S localhost:8000
   ```

   Then navigate to `http://localhost:8000`

3. **Make changes**

   Edit HTML, CSS, or JavaScript files directly. Refresh your browser to see changes.

## 🌐 Deployment

### GitHub Pages (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: OSLRAT website"
   git branch -M main
   git remote add origin https://github.com/yourusername/OSLRAT.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to **Settings** > **Pages**
   - Under "Source", select **main** branch
   - Click **Save**
   - Your site will be live at `https://yourusername.github.io/OSLRAT/`

3. **Update links**

   After deployment, update these URLs in your HTML files:
   - GitHub repository links (currently set to `https://github.com/yourusername/OSLRAT`)
   - Open Graph URLs in meta tags
   - Any other project-specific links

### Other Hosting Platforms

#### Netlify

1. **Deploy from Git**
   - Connect your GitHub repository
   - Build command: *Leave empty*
   - Publish directory: `/`
   - Deploy!

2. **Drag and Drop**
   - Zip your project folder
   - Drag to Netlify Drop
   - Your site is live!

#### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Cloudflare Pages

1. Connect your GitHub repository
2. Build settings:
   - Build command: *None*
   - Build output directory: `/`
3. Deploy!

## 🎨 Customization

### Colors

The color scheme is defined using CSS custom properties in `css/styles.css`:

```css
:root {
  --color-primary: #0077BE;        /* Deep Ocean Blue */
  --color-secondary: #00A896;      /* Teal */
  --color-accent: #FF6B35;         /* Coral Orange */
  /* ... more colors ... */
}
```

Modify these values to change the entire color scheme.

### Typography

Font settings are also in CSS custom properties:

```css
:root {
  --font-primary: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, ...;
  --font-size-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
  /* ... more typography settings ... */
}
```

### Content

- Edit HTML files directly to update text, images, and structure
- All pages follow a consistent structure with navigation and footer
- Use the existing component classes for consistency

### Images

Add your images to the `assets/images/` directory and reference them in HTML:

```html
<img src="assets/images/your-image.jpg" alt="Description">
```

For better performance, consider:
- Optimizing images (compress, resize)
- Using WebP format with fallbacks
- Implementing lazy loading (already included in JS)

## 🧩 Components

The website includes these reusable components:

### Navigation
- **Fixed header** with smooth scrolling
- **Mobile menu** with hamburger toggle
- **Active link** highlighting

### Hero Section
- **Animated background** with wave effects
- **Stat cards** with hover effects
- **Scroll indicator** animation

### Feature Cards
- **Grid layout** with hover transforms
- **Icon placeholders** (add SVG icons)
- **Smooth transitions**

### Forms
- **Contact form** with validation
- **Newsletter signup** with feedback
- **Accessible inputs** with proper labels

### Content Blocks
- **Two-column layouts** with sidebar
- **Code blocks** with syntax highlighting support
- **Info boxes** for callouts
- **Timelines** and process steps

## ♿ Accessibility

This website follows accessibility best practices:

- ✅ Semantic HTML5 elements
- ✅ ARIA labels where needed
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ Sufficient color contrast
- ✅ Responsive text sizing
- ✅ Screen reader friendly
- ✅ Reduced motion support

Test accessibility with:
- [WAVE Browser Extension](https://wave.webaim.org/extension/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- Lighthouse in Chrome DevTools

## 🚄 Performance

The website is optimized for performance:

- ⚡ No build tools or dependencies
- ⚡ Minimal CSS and JavaScript
- ⚡ Efficient animations using transform and opacity
- ⚡ Lazy loading for images
- ⚡ Intersection Observer for scroll effects
- ⚡ Debounced scroll handlers

Test performance with:
- Lighthouse in Chrome DevTools
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)

## 🌍 Browser Support

This website supports all modern browsers:

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

Note: Internet Explorer is not supported.

## 📝 Content Management

### Adding a New Page

1. **Create HTML file**
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <!-- Copy head from another page -->
       <title>New Page - OSLRAT</title>
   </head>
   <body>
       <!-- Copy navigation from another page -->

       <!-- Your content here -->

       <!-- Copy footer from another page -->
       <script src="js/script.js"></script>
   </body>
   </html>
   ```

2. **Add to navigation**

   Update the nav menu in all HTML files:
   ```html
   <li class="nav__item">
       <a href="newpage.html" class="nav__link">New Page</a>
   </li>
   ```

### Adding a Blog Section

If you need a blog:
1. Create a `blog/` directory
2. Create `blog/index.html` for the listing page
3. Create individual post pages as `blog/post-name.html`
4. Add blog link to navigation

## 🔧 Advanced Customization

### Dark Mode

To add dark mode support:

1. Uncomment the theme detection in `js/script.js`:
   ```javascript
   initThemeDetection(); // Line ~720
   ```

2. Add dark mode styles in `css/styles.css`:
   ```css
   [data-theme="dark"] {
     --color-neutral-50: #1A202C;
     --color-neutral-100: #2D3748;
     /* ... update all colors for dark mode ... */
   }
   ```

### Analytics

To add Google Analytics or other analytics:

1. Add the tracking script before `</head>`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

### Search Functionality

To add search:
1. Implement client-side search using [Fuse.js](https://fusejs.io/)
2. Or integrate with [Algolia DocSearch](https://docsearch.algolia.com/)
3. Add search input to navigation

## 🐛 Troubleshooting

### Styles not loading
- Check file paths are relative and correct
- Ensure `css/styles.css` exists
- Clear browser cache

### JavaScript not working
- Check browser console for errors
- Ensure `js/script.js` is loaded
- Verify script tag is before `</body>`

### Forms not submitting
- The forms currently log to console (demonstration)
- Implement actual form handling with a backend API
- Or use a service like [Formspree](https://formspree.io/)

### Images not displaying
- Check file paths
- Ensure images exist in `assets/images/`
- Check file extensions match

## 📚 Resources

- [HTML5 Semantic Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Web Accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/)
- [Web Performance](https://web.dev/performance/)

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines

- Maintain consistent code style
- Ensure accessibility standards are met
- Test on multiple browsers and devices
- Update documentation as needed
- Keep performance optimized

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Design inspired by modern ocean and climate science websites
- Icons: [Heroicons](https://heroicons.com/) (if used)
- Color palette: Ocean and climate-inspired theme
- Built with modern web standards and best practices

## 📧 Contact

For questions or feedback:

- GitHub Issues: [https://github.com/yourusername/OSLRAT/issues](https://github.com/yourusername/OSLRAT/issues)
- Website: Use the contact form at `/contact.html`
- Email: your-email@example.com

## 🗺️ Roadmap

Future enhancements:
- [ ] Interactive sea-level rise visualization tool
- [ ] Data explorer with filtering and charts
- [ ] User dashboard for saved assessments
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Blog/news section
- [ ] API documentation with live examples
- [ ] Case studies and success stories

---

Built with science, designed for impact. 🌊

**OSLRAT** - Empowering coastal communities through accessible climate science.
