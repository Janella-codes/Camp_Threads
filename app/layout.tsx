import { ClerkProvider } from '@clerk/nextjs';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Threads",
  description: "A Next.js 13 Meta Threads application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang='en'>
        <body className={inter.className}>


          <main className='flex flex-row'>
  
            <section className='main-container'>
              <div className='w-full max-w-4xl'>{children}</div>
            </section>
            {/* @ts-ignore */}
      
          </main>

    
        </body>
      </html>
    </ClerkProvider>
  );
}