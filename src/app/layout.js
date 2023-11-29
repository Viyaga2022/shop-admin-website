import { Inter } from 'next/font/google'
import '@/styles/globals.scss'
import { Toaster } from 'react-hot-toast'
import ReduxProvider from '@/redux/ReduxProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shop Admin',
  description: 'Viyaga Shop Admin Dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
        <Toaster position='top-right' />
      </body>
    </html>
  )
}
