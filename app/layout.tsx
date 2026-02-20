import type { Metadata, Viewport } from 'next'
import { Noto_Sans_KR, Noto_Serif_KR } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-noto-sans-kr',
})

const notoSerifKR = Noto_Serif_KR({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-noto-serif-kr',
})

export const metadata: Metadata = {
  title: '서전주(이서)빌리지 | 전북 최대 규모 72세대 단독주택단지',
  description: '토지 80평 + 주택 34평형, 4억원대로 완벽한 내 집 마련. 전북혁신도시 1.2km, 1조원 피지컬 AI 실증단지 수혜 입지.',
  keywords: '서전주빌리지, 이서빌리지, 전북혁신도시, 단독주택, 타운하우스, 전주 부동산, 토지분양',
}

export const viewport: Viewport = {
  themeColor: '#1b3a2d',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${notoSansKR.variable} ${notoSerifKR.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
