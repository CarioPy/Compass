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
          className="h-1/2"
          title="3d Animated Realistic Human Heart V1.0"
          frameBorder="0"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          src="https://sketchfab.com/models/a70c0c47fe4b4bbfabfc8f445365d5a4/embed?autostart=1&preload=1"
        ></iframe>
        <iframe
          className="h-1/2"
          src="https://my.spline.design/organicmaterialcopy-fa4c3c90752b539162cb60b609a9182f/"
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </main>
    </div>
  )
}
