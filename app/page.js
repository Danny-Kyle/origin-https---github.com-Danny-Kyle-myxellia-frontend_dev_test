import Image from 'next/image'
import { Body, Dashboard, Header } from '@/components'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Body/>
    </main>
  )
}
