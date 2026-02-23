// src/app/layout.js
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/Sidebar';
import ThemeProvider from '@/components/ThemeProvider';
import CommandPalette from '@/components/CommandPalette';
import Navbar from '@/components/Navbar'; // <-- 1. Uvozimo novi meni

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Školska Platforma | Edukacija budućnosti',
  description: 'Skalabilna platforma za učenje.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#FDFBF8] dark:bg-[#121212] text-[#4A4A4A] dark:text-gray-300 antialiased min-h-screen flex flex-col transition-colors duration-300`}>
        <ThemeProvider>
          
          <CommandPalette />
          
          <div className="flex flex-col md:flex-row min-h-screen w-full">
            <Sidebar />
  
            {/* OVO JE NOVO: Kontejner za desnu stranu ekrana */}
            <div className="flex-1 flex flex-col w-full min-w-0">
              
              <Navbar /> {/* <-- 2. Ubacujemo gornji meni ovde! */}
              
              <main className="flex-1 w-full p-4 sm:p-6 md:p-10 lg:p-12 overflow-x-hidden">
                <div className="max-w-7xl mx-auto">
                  {children}
                </div>
              </main>

            </div>

          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}