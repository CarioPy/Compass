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

      <main className="flex h-screen w-screen flex-col items-center justify-center bg-zinc-900 text-white">
        <iframe
          className="h-full w-full"
          title="Compass"
          frameBorder="0"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
          src="https://sketchfab.com/models/e712ba658ab84d7791efba54d6f5c243/embed?autostart=1&preload=1"
        ></iframe>
      </main>
    </div>
  )
}
