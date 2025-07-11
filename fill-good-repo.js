const fs = require('fs');
const path = require('path');

const filesToWrite = {
  'README.md': `
# 🌟 Awesome E-Commerce App

An AI-accelerated React + TypeScript + Vite e-commerce application. Includes Shadcn UI, Vitest testing, and GitHub Copilot workflow integration.

## 🚀 Features
- Modern React stack with TypeScript
- Shadcn UI components
- AI-assisted development workflow (GitHub Copilot, Cursor)
- End-to-end testing with Vitest
- Fully documented API & architecture

## 📦 Getting Started
1. Clone the repo:
   \`\`\`bash
   git clone https://github.com/your-org/awesome-ecommerce.git
   cd awesome-ecommerce
   \`\`\`
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

## 🧪 Running Tests
\`\`\`bash
npm run test
\`\`\`

## 📝 Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📜 License
MIT License - see [LICENSE](LICENSE) for details.
  `.trim(),

  'CONTRIBUTING.md': `
# 🤝 Contributing Guidelines

Thank you for considering contributing! 🎉

## 📝 How to Contribute
1. **Fork the Repository**
2. **Clone your fork**:
   \`\`\`bash
   git clone https://github.com/your-username/awesome-ecommerce.git
   cd awesome-ecommerce
   \`\`\`
3. **Create a feature branch**:
   \`\`\`bash
   git checkout -b feature/your-feature-name
   \`\`\`
4. **Commit your changes** (write clear commit messages!)
5. **Push your branch**:
   \`\`\`bash
   git push origin feature/your-feature-name
   \`\`\`
6. **Open a Pull Request**

## 🧪 Tests
Run tests locally before submitting:
\`\`\`bash
npm run test
\`\`\`

## 📦 Coding Standards
- Follow Prettier formatting
- Include JSDoc comments
- Keep functions small and modular

Happy coding! 💻✨
  `.trim(),

  'CODE_OF_CONDUCT.md': `
# ❤️ Code of Conduct

## Our Pledge
We as members, contributors, and leaders pledge to make participation in our project a harassment-free experience for everyone.

## Our Standards
Examples of behavior that contributes to a positive environment:
- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences

Examples of unacceptable behavior:
- Harassment and exclusionary comments
- Personal attacks

## Enforcement
Violations will be addressed by the project maintainers.

## Contact
contact@yourdomain.com
  `.trim(),

  'LICENSE': `
MIT License

Copyright (c) 2025 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy...
  `.trim(),

  '.gitignore': `
# Node
node_modules/
dist/
.env
.DS_Store
  `.trim(),

  'docs/architecture.md': `
# 🏗 Architecture Overview

## Overview
This project uses:
- React + TypeScript + Vite
- Shadcn UI
- Vitest for testing
- GitHub Copilot workflow integration

## Folder Structure
\`\`\`
src/
  components/
  pages/
  utils/
tests/
  \`\`\`
  `.trim(),

  'docs/api_reference.md': `
# 📖 API Reference

## Endpoints
| Method | Endpoint        | Description             |
|--------|-----------------|-------------------------|
| GET    | /products       | Fetch all products      |
| POST   | /products       | Create a new product    |

## Authentication
All API calls require a bearer token in the Authorization header.
  `.trim(),

  'src/index.ts': `
// Entry point for Awesome E-Commerce App

console.log('Welcome to Awesome E-Commerce!');
  `.trim(),

  'tests/index.test.ts': `
import { describe, it, expect } from 'vitest';

describe('Basic Test', () => {
  it('should pass', () => {
    expect(true).toBe(true);
  });
});
  `.trim()
};

// Write each file
for (const [relativePath, content] of Object.entries(filesToWrite)) {
  const filePath = path.join(process.cwd(), relativePath);
  const dir = path.dirname(filePath);

  // Ensure directory exists
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Wrote ${relativePath}`);
}

console.log('🎉 All files updated successfully!');
