import { Rubik } from 'next/font/google'
import Header from '@/sections/Header'
import Hero from '@/sections/Hero'
import Features from '@/sections/Features'
import Extensions from '@/sections/Extensions'
import FAQs from '@/sections/FAQs'
import Signup from '@/sections/Signup'
import Footer from '@/sections/Footer'

const rubik = Rubik({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="w-full h-screen">

      <Header />

      <Hero />

      <Features />

      <Extensions />

      <FAQs />

      <Signup />

      <Footer />

    </main >
  )
}