import Image from 'next/image'
import { Body, Header, Navbar } from '@/components'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Navbar />
      <Body/>
    </main>
  )
}
