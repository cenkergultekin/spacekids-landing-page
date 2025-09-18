import HoverHighlightText from './HoverHighlightText'


export default function TitleSection() {
    return (
      <section className="min-h-screen bg-black flex items-center justify-center">
        <HoverHighlightText className="block" baseColor="#9ca3af" highlightColor="#ffffff" size={180}>
        <p className="text-white text-5xl md:text-6xl leading-relaxed text-center max-w-4xl px-6">
        When you educate a generation to explore, the universe itself becomes your classroom.
        </p>
        </HoverHighlightText>
      </section>
    )
  }