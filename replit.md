# Dawson Smith Personal Landing Page

## Project Overview
A static personal portfolio/landing page for Dawson Smith, a Business Analytics student at the University of Iowa (Tippie College of Business).

## Technologies
- **HTML5** - Page structure
- **CSS3** - Styling (`css/stylesheet.css`)
- **JavaScript (ES6)** - Smooth scrolling and nav interactions (`js/scripts.js`)
- No build system or package manager; pure static site

## Project Structure
```
index.html          - Main page entry point
css/
  stylesheet.css    - All styles, custom color scheme, responsive layout
js/
  scripts.js        - Smooth scroll and active nav state
README.md           - Project description
```

## Running the Project
The site is served using Python's built-in HTTP server on port 5000:
```
python3 -m http.server 5000 --bind 0.0.0.0
```
Workflow: "Start application" → port 5000 (webview)

## Deployment
Configured as a **static** deployment with `publicDir: "."`.
