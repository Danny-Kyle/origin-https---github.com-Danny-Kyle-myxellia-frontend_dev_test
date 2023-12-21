import Image from 'next/image'
import { Body, Header, Navbar, Footer } from '@/components'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between items-center">
      <Header />
      <Navbar />
      <Body/>
      <Footer />
    </main>
  )
}
