// src/app/layout.jsx
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/Sidebar';
import ThemeProvider from '@/components/ThemeProvider';
import CommandPalette from '@/components/CommandPalette'; // 1. UVOZIMO PRETRAGU

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
          
          <CommandPalette /> {/* 2. UBACUJEMO KOMPONENTU U KOREN (Uvek budna!) */}
          
          <div className="flex flex-col md:flex-row min-h-screen w-full">
  
          <Sidebar />
  
          <main className="flex-1 w-full p-4 sm:p-6 md:p-10 lg:p-12 overflow-x-hidden">
          <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
        </ThemeProvider>
      </body>
    </html>
  );
}