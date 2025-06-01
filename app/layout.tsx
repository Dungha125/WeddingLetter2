import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "THIỆP MỜI HOÀNG TRƯỜNG x THUỲ TRANG",
  description: "Hãy tham gia cùng chúng tôi trong sự kiện đặc biệt này!",
  icons: {
    icon: "/SVG/logo.ico", // Đường dẫn favicon (Next.js tự động lấy từ /public)
  },
  openGraph: {
    title: "THIỆP MỜI HOÀNG TRƯỜNG x THUỲ TRANG",
    description: "Hãy tham gia cùng chúng tôi trong sự kiện đặc biệt này!",
    url: "https://thiepmoitruongtrang.dhatech.pro", // Đổi thành URL thực tế của bạn
    siteName: "Hoàng Trường & Thuỳ Trang",
    images: [
      {
        url: "https://thiepmoitruongtrang.dhatech.pro/img/anh.jpg", // Ảnh preview khi chia sẻ link
        width: 1200,
        height: 630,
        alt: "Thiệp mời lễ cưới Hoàng Trường x Thuỳ Trang",
      },
    ],
    type: "website",

  },
  twitter: {
    card: "summary_large_image",
    title: "THIỆP MỜI HOÀNG TRƯỜNG x THUỲ TRANG",
    description: "Hãy tham gia cùng chúng tôi trong sự kiện đặc biệt này!",
    images: ["https://thiepmoitruongtrang.dhatech.pro/img/anh.jpg"], // Ảnh preview trên Twitter
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi"> {/* Đặt ngôn ngữ Tiếng Việt */}
      <head>
        {/* Meta tags bổ sung để hỗ trợ Messenger và Zalo */}
        <meta property="og:title" content="THIỆP MỜI HOÀNG TRƯỜNG x THUỲ TRANG" />
        <meta property="og:description" content="Hãy tham gia cùng chúng tôi trong sự kiện đặc biệt này!" />
        <meta property="og:image" content="https://thiepmoitruongtrang.dhatech.pro/img/anh.jpg" />
        <meta property="og:url" content="https://thiepmoitruongtrang.dhatech.pro/" />
        <meta property="og:image:secure_url" content="https://thiepmoitruongtrang.dhatech.pro/img/anh.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Hoàng Trường x Thuỳ Trang" />
        <meta property="og:image:alt" content="Thiệp mời sự kiện Hoàng Trường x Thuỳ Trang" />
{/* Đảm bảo có mô tả hình ảnh */}
        
        {/* Thẻ Meta Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="THIỆP MỜI Hoàng Trường x Thuỳ Trang" />
        <meta name="twitter:description" content="Hãy tham gia cùng chúng tôi trong sự kiện đặc biệt này!" />
        <meta name="twitter:image" content="https://thiepmoitruongtrang.dhatech.pro/img/anh.jpg" /> {/* Fixed image URL */}

        <meta property="fb:app_id" content="997664185513686" />

        {/* Thêm thẻ Meta cho các nền tảng khác nếu cần */}
        <meta name="viewport" content="width=device-width, initial-scale=1" /> {/* Đảm bảo tính tương thích di động */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
