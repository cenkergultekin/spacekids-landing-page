import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import FeatureOverview from '@/components/FeatureOverview'
import PlatformShowcase from '@/components/PlatformShowcase'
import WorkforceManagement from '@/components/WorkforceManagement'
import CustomerSpotlight from '@/components/CustomerSpotlight'
import StatisticsSection from '@/components/StatisticsSection'
import FAQSection from '@/components/FAQSection'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeatureOverview />
      <PlatformShowcase />
      <WorkforceManagement />
      <CustomerSpotlight />
      <StatisticsSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
