"use client";

import type { Metadata } from "next";
import { DM_Serif_Display } from "next/font/google";
import { Provider } from 'react-redux';
import store from '../redux/store';
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";


const dm_serif_init = DM_Serif_Display({ 
  subsets: ["latin"], 
  weight: "400", 
  variable: "--font-dm-serif",
   
});

// export const metadata: Metadata = {
//   title: "The New York Times",
//   description: "Breaking News, US News, World News and Videos",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dm_serif_init.variable}`}>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
