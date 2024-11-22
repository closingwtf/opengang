<div align="center">
  <h1 align="center">ClosingStats</h1>
  <h3>Crowdsourced Anonymized Financial Data Analytics</h3>
</div>


<div align="center">
  <a href="https://github.com/closingwtf/stats/stargazers"><img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/closingwtf/stats"></a>
  <a href="https://twitter.com/closingwtf"><img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/closingwtf"></a>
  <a href="https://github.com/closingwtf/stats/blob/main/LICENSE"><img alt="License" src="https://img.shields.io/badge/license-MIT-blue"></a>
</div>

<p align="center">
    <a href="#-introduction">Introduction</a> ·
    <a href="#-features">Features</a> ·
    <a href="#-tech-stack">Tech Stack</a> ·
    <a href="#-data-quality">Data Quality</a> ·
    <a href="#-good-implementation-ideas">Good Implementation Ideas</a> ·
    <a href="#-features-to-be-added">Features To Be Added</a> ·
    <a href="#-feature-requests">Feature Requests</a> ·
    <a href="#-contributing">Contributing</a> ·
    <a href="#-getting-started">Getting Started</a>
</p>

## ✨ Introduction

ClosingStats is an open source project for sharing useful data anonymously for the betterment of everyone. The project easily allows for the processing, structuring, anonymization, evaluation, aggregation, and dashboarding of financial documents, helping consumers make informed decisions through collective intelligence. Think of it as an open source "Glassdoor for Financial Data" where the users contributing just need to upload a document.


## 🚀 Features

| Feature | Description |
|---------|-------------|
| 📄 PDF Document Processing & Structuring | Auto-extract PDFs into structures |
| 🔒 Privacy First | Automatic PII removal and document anonymization |
| 📊 Analytics & Insights | Generate statistics, plot data, etc |
| 📈 Data Visualization | Interactive charts and graphs for data exploration |


## 🛠 Tech Stack

- [Next.js 15](https://nextjs.org/) – Framework
- [TypeScript](https://www.typescriptlang.org/) – Language
- [Tailwind](https://tailwindcss.com/) – CSS
- [shadcn/ui](https://ui.shadcn.com) - UI Components
- [magicui](https://ui.magicui.com) - UI Components
- [Prisma](https://prisma.io) - ORM [![Made with Prisma](https://made-with.prisma.io/dark.svg)](https://prisma.io)
- [MongoDB](https://www.mongodb.com/) - Database
- [Vercel](https://vercel.com/) – Hosting & AI Library
- [Anthropic](https://anthropic.com/) – Document (PDF) Processing


## 📑 Good Implementation Ideas

- Mortgage Closing Documents [stats.closing.wtf](https://stats.closing.wtf)
- Auto Car Financing Agreements (Good Idea)
- Student Loan Documents (Good Idea) 
- Business Loan Agreements (Good Idea)
- Credit Card Terms (Good Idea)

## 🎯 Features To Be Added

### Document Data Selection
- [ ] Post-upload data selection interface
  - Allow user to choose specific data fields they want to share
  - Provide preview of structured data before final submission

### Data Quality & Validation
- [ ] Implement robust data validation pipeline
  - Email verification system for user submissions
  - Unique confirmation IDs for each document upload
  - Automated data sanity checks and outlier detection
  - Manual review queue for suspicious submissions

## 🙋‍♂️ Feature Requests

To request a new feature, please [open an issue](https://github.com/closingstats/stats/issues/new) on GitHub. We welcome all suggestions and feedback to help make ClosingStats more useful for everyone.


## 😎 Contributing

ClosingStats is an open-source project, and we welcome contributions from the community.

If you'd like to contribute, please fork the repository and make any changes you'd like. Pull requests are warmly welcome.


## 🏃‍♂️ Getting Started

### Prerequisites

Here's what you need to setup ClosingStats:

- Node.js
- MongoDB Database URL
- Cloudflare R2 Keys
- Anthropic API Key

### 1. Clone the repository

```shell
git clone https://github.com/closingwtf/stats.git
cd stats
```

### 2. Install npm dependencies

```shell
npm install
```

### 3. Copy the environment variables to `.env` and change the values

```shell
cp .env.example .env
```

### 4. Initialize the prisma database

```shell
npx prisma generate
```

### 5. Run the dev server

```shell
npm run dev
```

### 6. Open the app in your browser

Visit [http://localhost:3000](http://localhost:3000) in your browser.


