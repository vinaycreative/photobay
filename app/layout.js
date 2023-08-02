import Header from "./components/Header"
import "./globals.css"
import Script from "next/script"

export const metadata = {
  title: "PhotoBay",
  description:
    "PhotoBay: A photo search app with Pixabay API integration, masonry layout, and user features. Built using Next.js, Express, and MongoDB. Explore high-quality images, favorites, and download history.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script src="https://unpkg.com/@phosphor-icons/web" />
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
