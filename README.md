# Portfolio Template

A simple template to create your own portfolio using the Quasar Framework and Vue 3. Follow the steps below to get started, customize your portfolio, and deploy it.

See my own portfolio as an example: [matiasjrb.com.ar](https://matiasjrb.com.ar)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/MatiasJRB/portfolio-template)


## 📋 Prerequisites

Before you start, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher) :nodejs:
- [Yarn](https://yarnpkg.com/) (for managing dependencies) :yarn:
- [Git](https://git-scm.com/) (to clone the repository) :octocat:

## ⚙️ Installation

To set up the project locally, follow these steps:

1. Clone this repository:
   ```bash
   git clone https://github.com/MatiasJRB/portfolio-template.git
   ```

2. Navigate to the project directory:
   ```bash
   cd portfolio-template
   ```

3. Install the required dependencies:
   ```bash
   yarn install
   ```

## 🎨 Customization

This template includes dummy data that you can replace with your personal information. To customize it:

1. Replace "John Doe" with your name in the entire project. Update the following files:
   - `src/assets/data/resume.json`
   - `package.json`
   - `quasar.conf.js`

2. Edit your personal information in `src/assets/data/resume.json`.

3. Resume
   - Replace `John-Doe-25.pdf` file with your own CV.
   - Replace the value of `RESUME_URL` with the name of the file of your CV.

4. (Optional) Modify the design to suit your style:
   - Update the styles in `src/css`.
   - Customize icons and colors in Quasar components.

## 📊 Analytics

To track visitors to your portfolio, add to the environment variables the `FIREBASE_API_KEY` value. You can get this value from your Firebase project settings. Make sure to enable Google Analytics in your Firebase project.

## 🚀 Running Locally

To start the project in development mode:

```bash
yarn dev
```

The development server will be running at [http://localhost:8080](http://localhost:8080).

## 🏗️ Building for Production

To build the project for production:

```bash
yarn build
```

The production-ready files will be in the `dist` folder. You can deploy them to any hosting platform.

## 🤝 Contributions

If you have any issues or suggestions for improvements, feel free to open an issue or submit a pull request.

## 💸 Donations

If you found this template helpful, consider buying me a coffee or sponsoring me. Your support is greatly appreciated.

[![Donate with Mercado Pago](https://img.shields.io/badge/Donate-Mercado%20Pago-blue.svg)](https://mpago.la/1oGB9og)

## 📜 Disclaimer

This template is a work in progress. The mobile performance (70/100), accessibility (80/100), and SEO (82/100) can be improved. These are known issues, and I intend to improve them in the future. See [Google PageSpeed Insights](https://pagespeed.web.dev/analysis/https-anda-8qih-vercel-app/ze8sc7b53q?form_factor=desktop)
