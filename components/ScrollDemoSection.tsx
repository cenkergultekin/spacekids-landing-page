import ScrollStack, { type ScrollStackCard } from '@/components/ui/ScrollStack'

export default function ScrollDemoSection() {
  const cards: ScrollStackCard[] = [
    {
      title: 'Kayıt Ol ve Başla',
      subtitle: 'Dakikalar içinde profilini oluştur, hedeflerini belirle.',
      badge: 'Adım 1',
    },
    {
      title: 'Topluluklara Katıl',
      subtitle: 'Senin gibi düşünen insanlarla ilerle, motivasyonunu koru.',
      badge: 'Adım 2',
    },
    {
      title: 'Görevleri Tamamla',
      subtitle: 'Kişiselleştirilmiş görevlerle yetkinliklerini artır.',
      badge: 'Adım 3',
    },
    {
      title: 'Mentor Desteği Al',
      subtitle: 'Uzmanlardan geri bildirim ve yönlendirme al.',
      badge: 'Adım 4',
    },
    {
      title: 'Başarılarını Paylaş',
      subtitle: 'Rozetler ve puanlarla ilerlemeni görünür kıl.',
      badge: 'Adım 5',
    },
  ]

  return (
    <section className="py-10 md:py-20">
      <div className="max-w-7xl mx-auto">
        <ScrollStack
          backgroundColor="bg-transparent"
          cardHeight="70vh"
          sectionHeightMultiplier={3.5}
          cards={cards}
        />
      </div>
    </section>
  )
}
