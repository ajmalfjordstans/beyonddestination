import { Inter, Lato } from 'next/font/google'
import './globals.css'
import StoreProvider from '../state/storeProvider'
import Layout from '@/components/layout'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})
const lato = Lato({
  subsets: ['latin'],
  weight: ["100", "300", "400", "700", "900"],
  variable: '--font-lato'
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
          <body className={`${lato.className} ${inter.variable} ${lato.variable}`}>
            {children}
          </body>
        </Layout>
      </StoreProvider>
    </html>
  )
}
