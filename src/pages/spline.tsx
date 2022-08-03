import React from "react"
import Head from "next/head"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Head>
        <title>3D viewers</title>

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
            <Link href="../">
              <h2 className="text white mb-2 cursor-pointer text-xl hover:text-[#d9c27e]">
                SketchFab
              </h2>
            </Link>
            <Link href="../three">
              <h2 className="text white mb-2 cursor-pointer text-xl hover:text-[#d9c27e]">
                Three.js
              </h2>
            </Link>
          </div>
        </div>
        <div className="absolute left-48 top-10 rounded-xl bg-white p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-zinc-800">Spline</h1>
          <p className="mt-4 text-xl font-light text-zinc-800 underline">
            spline.design
          </p>
          <p className="text-md mt-8 font-light text-zinc-800">
            <ul className="list-disc">
              <li> basically free- 7€ per month to remove logo </li>
              <li> iframe - can't be loaded without connection </li>
              <li> can be embed - transparent </li>
            </ul>
          </p>
        </div>

        <iframe
          src="https://my.spline.design/polaroidgocopy-88ee003b697430669eb6e01687723af4/"
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </main>
    </div>
  )
}
