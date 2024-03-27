import { Roboto } from "next/font/google"
import "./globals.css"

const font = Roboto({ 
    subsets: ["latin"],
    weight: ["400", "700"]
})

export const metadata = {
    title: "Newsletter",
    description: "Newsletter sign-up form with success message",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={font.className}>
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}
