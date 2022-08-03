import React from "react"
import Head from "next/head"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Head>
        <title>3D renders</title>

        <meta
          name="description"
          content="Use tailwind css, eslint, prettier & absolute imports instantly.
            Easily extendable zero-config template for pros and beginners."
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-screen w-screen flex-col items-center justify-center bg-white text-white">
        <div className="absolute left-0 h-full w-36 bg-zinc-800">
          <div className="p-2">
            <Link href="/spline">
              <h2 className="text white mb-2 cursor-pointer text-xl hover:text-[#d9c27e]">
                Spline
              </h2>
            </Link>
            <Link href="/three">
              <h2 className="text white mb-2 cursor-pointer text-xl hover:text-[#d9c27e]">
                Three.js
              </h2>
            </Link>
          </div>
        </div>
        <div className="absolute left-48 top-10 rounded-xl bg-white p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-zinc-800">SketchFab</h1>
          <p className="mt-4 text-xl font-light text-zinc-800 underline">
            Epic Games
          </p>
          <p className="text-md mt-8 font-light text-zinc-800">
            <ul className="list-disc">
              <li> 79€ per month </li>
              <li> iframe - can't be loaded without connection </li>
              <li> can be embed - transparent </li>
              <li> accept every format - no problem with animations </li>
              <li> annotations available </li>
            </ul>
          </p>
        </div>

        <iframe
          className="h-full w-full"
          title="Firewatch Fan Art"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
          src="https://sketchfab.com/models/8ad7eb387e6e41e0abfe17eec5351f8b/embed?camera=0&autostart=1&preload=1"
        ></iframe>
      </main>
    </div>
  )
}
