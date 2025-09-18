import Header from '@/app/(landin-page)/components/Header'
import HeroSection from '@/app/(landin-page)/components/HeroSection'
import ModernCardsSection from '@/app/(landin-page)/components/ModernCardsSection'
import PlatformShowcase from '@/app/(landin-page)/components/PlatformShowcase'
import WorkforceManagement from '@/app/(landin-page)/components/WorkforceManagement'
import CustomerSpotlight from '@/app/(landin-page)/components/CustomerSpotlight'
import StatisticsSection from '@/app/(landin-page)/components/StatisticsSection'
import FAQSection from '@/app/(landin-page)/components/FAQSection'
import Footer from '@/app/(landin-page)/components/Footer'
import TitleSection from '@/app/(landin-page)/components/TitleSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ModernCardsSection />
      <CustomerSpotlight />
      <WorkforceManagement />
      <TitleSection />
      <StatisticsSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
