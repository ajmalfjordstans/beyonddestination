import { Inter, Lato, Libre_Franklin } from 'next/font/google'
import './globals.css'
import StoreProvider from '../state/storeProvider'
import Layout from '@/components/layout'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})
const franklin = Libre_Franklin({
  subsets: ['latin'],
  weight: ["100", "300", "400", "700", "900"],
  variable: '--font-franklin'
})

export const metadata = {
  title: 'Beyond Destination',
  description: 'Your travel guide',
  // icons: {
  //   icon: "/logo/nombox.svg",
  //   apple: "/logo/nombox.svg",
  // }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StoreProvider>
        <Layout>
          <body className={`${franklin.className} ${inter.variable} ${franklin.variable}`}>
            {children}
          </body>
        </Layout>
      </StoreProvider>
    </html>
  )
}
