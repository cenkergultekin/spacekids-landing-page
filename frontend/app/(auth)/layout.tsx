export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Auth route group layout. Keep minimal and isolated from marketing UI.
  return (
    <main className="min-h-screen bg-white">
      {children}
    </main>
  )
}
