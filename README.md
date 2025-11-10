# GroundCUA Website

Official website for **GroundCUA: Grounding Computer Use Agents on Human Demonstrations**

## 🌐 Live Website

Visit the website at: [https://groundcua.github.io](https://groundcua.github.io) (Update with your actual URL)

## 📋 Overview

This website showcases the GroundCUA project, featuring:
- **GroundCUA Dataset**: 3.56M+ human annotations across 56K screenshots from 87 desktop applications
- **GroundNext Models**: State-of-the-art vision-language models (3B and 7B) for UI element grounding
- Interactive examples and comprehensive documentation

## 🚀 Features

- **Modern Design**: Sleek, agentic theme with gradient animations and smooth transitions
- **Light/Dark Mode**: Toggle between beautiful light and dark themes with smooth transitions
  - Light mode by default (similar to [UI-Vision](https://uivision.github.io/))
  - Preference saved in browser localStorage
  - Theme-aware navbar and all UI components
- **Responsive Layout**: Fully optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: 
  - Smooth scrolling navigation
  - Category filters for application examples
  - Animated statistics and progress indicators
  - Copy-to-clipboard citation functionality
- **Performance Optimized**: Lightweight and fast loading
- **Accessibility**: Semantic HTML and keyboard navigation support

## 📁 Project Structure

```
groundcua.github.io/
├── index.html              # Main HTML file
├── styles.css              # Complete styling
├── script.js               # Interactive functionality
├── README.md              # This file
└── GroundCUA/             # Project assets (from Overleaf)
    ├── images/
    │   ├── icons/
    │   ├── examples_platforms/
    │   ├── stats/
    │   └── ...
    └── ...
```

## 🛠️ Setup & Deployment

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/groundcua/groundcua.github.io.git
   cd groundcua.github.io
   ```

2. **Open locally**
   - Simply open `index.html` in your browser
   - Or use a local server:
     ```bash
     python -m http.server 8000
     ```
   - Then visit `http://localhost:8000`

### GitHub Pages Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial website commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from `main` branch
   - Root directory: `/` (root)
   - Save

3. **Access your site**
   - Your site will be live at `https://[username].github.io/[repo-name]`

### Custom Domain (Optional)

1. Add a `CNAME` file with your domain:
   ```
   groundcua.com
   ```

2. Configure DNS settings with your domain provider:
   - Add A records pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

## 🎨 Customization

### Theme Customization

The website supports both light and dark themes. Edit CSS variables in `styles.css`:

**Light Theme (Default)**
```css
:root {
    --primary: #00D9FF;
    --secondary: #7B61FF;
    --accent: #FF6B9D;
    --bg-primary: #FFFFFF;
    --text-primary: #1A202C;
    /* ... more variables */
}
```

**Dark Theme**
```css
[data-theme="dark"] {
    --bg-primary: #0A0E1A;
    --text-primary: #FFFFFF;
    /* ... more variables */
}
```

Users can toggle between themes using the sun/moon icon in the navigation bar. The preference is automatically saved to localStorage.

### Content

- **Hero Section**: Update text in `index.html` under `<section class="hero">`
- **Statistics**: Modify numbers in the hero stats and dataset sections
- **Team**: Update author names and affiliations
- **Links**: Replace `#` placeholders with actual URLs for papers, datasets, and code

### Images

- Place new images in appropriate folders under `GroundCUA/images/`
- Update image paths in `index.html`

## 🔗 Important Links to Update

Before going live, replace these placeholder links:

1. **Paper Links**
   - ArXiv URL
   - PDF download link

2. **Code Repository**
   - GitHub repository URL
   - HuggingFace model hub links

3. **Dataset**
   - Dataset download link
   - Documentation link

4. **Demo**
   - Interactive demo link (if available)

Search for `href="#"` in `index.html` and replace with actual URLs.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Known Issues

None currently. Please report issues on GitHub.

## 📄 License

This website is open source. The research paper and associated materials are subject to their respective licenses.

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📧 Contact

For questions about the research:
- Visit the [GitHub repository](https://github.com/groundcua/groundcua)
- Open an issue for website-related problems

## 🙏 Acknowledgments

- Built with modern web technologies (HTML5, CSS3, JavaScript)
- Fonts: Inter and JetBrains Mono (Google Fonts)
- Icons: Emoji and SVG graphics
- Inspired by [OpenCUA](https://opencua.xlang.ai/) and [UI-Vision](https://uivision.github.io/suite.html)

## 📊 Analytics (Optional)

To add analytics, insert your tracking code in the `<head>` section of `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
<!-- ... -->
```

---

**Built with ❤️ by the GroundCUA Research Team**

Last Updated: November 2025

