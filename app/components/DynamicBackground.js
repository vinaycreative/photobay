"use client"
import { useEffect, useState } from "react"

import fetchRandomImage from "@/app/utils/fetchRandomImage"

const DynamicBackground = () => {
  const [backgroundImage, setBackgroundImage] = useState("")
  const getRandomImage = async () => {
    const imageUrl = await fetchRandomImage()
    setBackgroundImage(imageUrl)
  }

  useEffect(() => {
    getRandomImage()
  }, [])
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),url( ${backgroundImage})`,
      }}
    ></div>
  )
}

export default DynamicBackground
