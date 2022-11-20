import "../styles/globals.css"
import {Navigation} from "./components/Navigation"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <title>My first page in Next.js here you have to kiss her</title>
      
      <body>
        <Navigation/>      
        {children}
      </body>
    </html>
  )
}
