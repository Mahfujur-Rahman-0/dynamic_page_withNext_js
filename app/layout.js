import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <nav className="p-8 border-b border-gray-400">
                    <ul className="flex gap-5">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/blogs">Blogs</Link>
                        </li>
                    </ul>
                </nav>
                {children}
            </body>
        </html>
    );
}
