
import Image from 'next/image'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <picture className='w-full absolute top-0'>
      {/* <source srcSet="https://example.com/hero.avif" type="image/avif" />
      <source srcSet="https://example.com/hero.webp" type="image/webp" /> */}
      <img className='w-full' src={"/Background.png"} alt='' />
    </picture>
    </main>
  )
}
