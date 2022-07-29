import React, { Suspense } from "react"
import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import GltfModel from "../components/Gtf"
import Head from "next/head"

export default function Three() {
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
        <div className="absolute left-0 h-full w-36 bg-zinc-800"></div>
        <div className="absolute left-48 top-10 rounded-xl bg-white p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-zinc-800">Three.js</h1>
          <p className="mt-4 text-xl font-light text-zinc-800 underline">
            mrDoob
          </p>
          <p className="text-md mt-8 font-light text-zinc-800">
            <ul className="list-disc">
              <li> free </li>
              <li> upload the 3D model, client side </li>
              <li> can be embed - transparent </li>
              <li> less easy to set </li>
            </ul>
          </p>
        </div>
        <ModelViewer modelPath="Shaded_phone.glb" />
      </main>
    </div>
  )
}

const ModelViewer = ({ modelPath, scale = 40, position = [0, 0, -250] }) => {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[15, 15, 15]} />
      <Suspense fallback={null}>
        <GltfModel modelPath={modelPath} scale={scale} position={position} />
        <OrbitControls />
      </Suspense>
    </Canvas>
  )
}
