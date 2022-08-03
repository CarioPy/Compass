import React, { Suspense } from "react"
import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import GltfModel from "../components/Gtf"
import Head from "next/head"
import Link from "next/link"

export default function Three() {
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
        <div className="absolute left-0 z-10 h-full w-36 bg-zinc-800 ">
          <div className="p-2">
            <Link href="../">
              <h2 className="text white mb-2 cursor-pointer text-xl hover:text-[#d9c27e]">
                SketchFab
              </h2>
            </Link>
            <Link href="../spline">
              <h2 className="text white mb-2 cursor-pointer text-xl hover:text-[#d9c27e]">
                Spline
              </h2>
            </Link>
          </div>
        </div>
        <div className="absolute left-48 top-10 z-10 rounded-xl bg-white p-8 shadow-lg">
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
            30
          </p>
        </div>
        <ModelViewer modelPath="Shaded_phone.glb" />
      </main>
    </div>
  )
}

const ModelViewer = ({ modelPath, scale = 40, position = [0, 0, 0] }) => {
  return (
    <Canvas
      camera={{ position: [2, 0, 600], fov: 30 }}
      style={{
        backgroundColor: "#d9c27e",
        width: "100vw",
        height: "100vh",
      }}
    >
      <ambientLight intensity={1} />
      <spotLight position={[-100, -100, 100]} angle={0.15} penumbra={10} />
      <pointLight position={[-300, 300, 300]} color="#eba3ff" />
      <pointLight position={[300, -300, -300]} color="#32a852" />
      <Suspense fallback={null}>
        <GltfModel modelPath={modelPath} scale={scale} position={position} />
        <OrbitControls />
      </Suspense>
    </Canvas>
  )
}
