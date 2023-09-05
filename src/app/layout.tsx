'use client'
import './globals.css';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
type Props = {
  children: React.ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({children}: Props) {
  useEffect(()=>{
    AOS.init();
  }) 
  return children;
}