import Image from 'next/image'
import spaceBg from '@/images/space.jpg'

export default function LandinPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Route group layout for landing pages. Kept minimal to avoid any visual change.
  return (
    <div className="relative min-h-screen">
      {/* Fixed background image behind all content */}
      <div className="fixed inset-0 z-0">
        <Image
          src={spaceBg}
          alt="space background"
          fill
          priority
          className="object-cover"
        />
      </div>
      {/* Optional subtle overlay for readability; adjust or remove as needed */}
      <div className="relative z-10 min-h-screen bg-black/30">
        {children}
      </div>
    </div>
  )
}
