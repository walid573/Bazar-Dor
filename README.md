# বাজার দর | BazarDor

A modern Bengali product price comparison website built with **Next.js**, **TypeScript**, and **Tailwind CSS**. **BazarDor** helps users explore everyday products, compare prices from different sources, and quickly find useful market price information through a clean and responsive interface.

**Live demo:** [https://bazar-dor-z.vercel.app/](https://bazar-dor-z.vercel.app/) 
**Repository:** [https://github.com/walid573/Bazar-Dor](https://github.com/walid573/Bazar-Dor)

---

## ✨ Features

- 🛒 **Product Price Comparison** — Compare product prices and identify the lowest, highest, and average prices.
- 🔎 **Product Search & Categories** — Browse products by category and quickly find specific items.
- 📦 **Product Details** — View detailed information including product name, image, unit, prices, and price changes.
- 📱 **Responsive Design** — Optimized for mobile, tablet, and desktop screens.
- 🇧🇩 **Bengali-Friendly UI** — Designed with Bengali users in mind, including Bengali product names, units, and pricing.

---

## 🛠️ Technologies Used

| **Area** | **Technology** |
| -------- | -------------- |
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI Components | HeroUI |
| Icons | Lucide React |
| Authentication | Better Auth |
| Database | MongoDB |
| API | REST API |
| Deployment | Vercel |
| Package Manager | Bun |

---

## 📁 Project Structure

```text
Bazar-Dor/
├── public/
│   └── ...                    # Static assets
├── src/
│   ├── app/
│   │   ├── page.tsx           # Home page
│   │   ├── products/
│   │   │   └── [slug]/        # Product details
│   │   ├── signin/             # Sign in page
│   │   ├── signup/             # Sign up page
│   │   └── ...
│   ├── components/             # Reusable UI components
│   ├── lib/                    # API, authentication & utilities
│   └── ...
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18 or later
- Bun *(recommended)* or npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/walid573/Bazar-Dor.git

# Enter the project directory
cd Bazar-Dor

# Install dependencies
bun install

# Start the development server
bun dev
```

Or with npm:

```bash
npm install
npm run dev
```

Open **http://localhost:3000** in your browser.

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory and add the required environment variables:

```env
BETTER_AUTH_URL=
BETTER_AUTH_DB_URL=
```

Add any additional API or authentication environment variables required by your local configuration.

> **Never commit your `.env.local` file or expose secret API keys publicly.**

---

## 📡 API

BazarDor uses a REST API to retrieve product and price information.

Example endpoint:

```text
https://api.api-store.workers.dev/api/bazardor/products
```

Products can also be filtered by category:

```text
https://api.api-store.workers.dev/api/bazardor/products?category=chal
```

---

## 🧭 Routes

| **Path** | **Description** |
| -------- | --------------- |
| `/` | Homepage with featured products and categories |
| `/category/[slug]` | Products filtered by category |
| `/products/[slug]` | Product details and price information |
| `/signin` | User sign-in |
| `/signup` | User registration |

---

## 🎯 Project Goals

BazarDor is designed to make everyday product-price information easier to access for Bengali users.

The project focuses on:

- Making price comparison simple
- Providing useful product information
- Creating a fast and responsive shopping experience
- Presenting market information in Bengali
- Building a scalable modern web application

---

## 🗺️ Roadmap

- [ ] Product search
- [ ] Category pages
- [ ] Price history charts
- [ ] User favorites / saved products
- [ ] Price alerts
- [ ] Dark mode
- [ ] Advanced filtering and sorting
- [ ] More product categories

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch:

```bash
git checkout -b feature/your-feature
```

3. Make your changes
4. Commit your changes:

```bash
git commit -m "Add your feature"
```

5. Push the branch:

```bash
git push origin feature/your-feature
```

6. Open a Pull Request

---

## 👨‍💻 Author

**Mohammad Walid**

GitHub: [@walid573](https://github.com/walid573)

---

## ⭐ Support

If you find **BazarDor** useful, consider giving the repository a ⭐ on GitHub!

> Built with ❤️ using Next.js and TypeScript.