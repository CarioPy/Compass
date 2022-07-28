import React, { Suspense } from "react"
import Head from "next/head"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import GltfModel from "../components/Gtf"

const ModelViewer = ({ modelPath, scale = 40, position = [0, 0, 0] }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
        <GltfModel modelPath={modelPath} scale={scale} position={position} />
        <OrbitControls />
      </Suspense>
    </Canvas>
  )
}

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
          src="https://sketchfab.com/models/e712ba658ab84d7791efba54d6f5c243/embed?autostart=1&preload=1&annotation_tooltip_visible=0&annotations_visible=0"
        ></iframe>
        <ModelViewer modelPath="Glasses.glb" />
      </main>
    </div>
  )
}
