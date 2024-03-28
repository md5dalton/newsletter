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
        <html lang="en" className="md:bg-charcoal-grey grid place-items-center min-h-screen md:px-6">
            <body className={font.className}>
                <main className="bg-white md:p-6 md:rounded-[36px] md:shadow-card">
                    {children}
                </main>
            </body>
        </html>
    )
}
