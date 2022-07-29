import React from "react"
import Head from "next/head"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js advanced start template.</title>

        <meta
          name="description"
          content="Use tailwind css, eslint, prettier & absolute imports instantly.
            Easily extendable zero-config template for pros and beginners."
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-screen w-screen flex-col items-center justify-center bg-white text-white">
        <div className="absolute top-0 h-24 w-full bg-white shadow-2xl">
          Hello
        </div>
        <div className="absolute right-0 h-full w-24 bg-white ">Hello</div>
        <div className="absolute bottom-0 h-24 w-full bg-white ">Hello</div>
        <div className="absolute left-0 h-full w-24 bg-white ">Hello</div>

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
          src="https://sketchfab.com/models/5646e6a3c8834022a0e289465f0bbc5d/embed?camera=0&autostart=1&preload=1"
        ></iframe>
      </main>
    </div>
  )
}
