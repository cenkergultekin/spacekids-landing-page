import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ModernCardsSection from '@/components/ModernCardsSection'
import PlatformShowcase from '@/components/PlatformShowcase'
import WorkforceManagement from '@/components/WorkforceManagement'
import CustomerSpotlight from '@/components/CustomerSpotlight'
import StatisticsSection from '@/components/StatisticsSection'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ModernCardsSection />
      <PlatformShowcase />
      <WorkforceManagement />
      <CustomerSpotlight />
      <StatisticsSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
