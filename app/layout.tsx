export const metadata = {
  title: 'Schnibbel',
  description: 'eXhibit and eXplore eXceptional projects from developers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
