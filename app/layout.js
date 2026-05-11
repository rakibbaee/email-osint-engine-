export const metadata = {
  title: 'Email OSINT Engine | Deep Web Recon',
  description: 'Advanced Deep Web Email Analyzer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-black m-0 p-0">{children}</body>
    </html>
  )
}
