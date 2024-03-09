/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('/images/hero-bg.jpg')",
        'hero-blog': "url('/images/blog-hero.jpg')",
        'hero-wedding': "url('/images/indian-wedding.jpg')",
        'banner': "url('/images/pattern.png')",
        'winebanner': "url('/images/wine-banner.png')",
        'guidebanner': "url('/images/guide-banner.jpg')",
        'custom-gradient': 'linear-gradient(360deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0.7959558823529411) 0%, rgba(255,255,255,0) 35%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        lato: ['var(--font-lato)'],
        inter: ['var(--font-inter)'],
      },
      colors: {
        primary: '#03A9F4',
      },
      boxShadow: {
        custom: '0px 3px 8px -1px rgba(50, 50, 71, 0.05), 0px 0px 1px 0px rgba(12, 26, 75, 0.24)',
        custom2: '0px 6px 12px -2px rgba(50, 50, 71, 0.1), 0px 0px 2px 1px rgba(12, 26, 75, 0.3)',
        boxShadow: '20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff',
        boxShadow2: '7px 7px 16px #d6d6d6, -7px -7px 16px #ffffff',
      },
    },
  },
  plugins: [],
}
