"use client"
import React, { useEffect, useState } from "react"
import styles from "@/app/styles/SearchBox.module.css"
import SearchInput from "./SearchInput"
import { useRouter } from "next/navigation"
import Link from "next/link"

const SearchBox = ({ small, query, backdropUrl }) => {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    router.push(`/search/${encodeURIComponent(searchQuery)}`)
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(e)
    }
  }

  useEffect(() => {
    if (query) {
      setSearchQuery(query)
    }
  }, [query])

  return (
    <>
      {small ? (
        <div
          style={{
            height: "36vh",
            paddingTop: "100px",
            justifyContent: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%),url( ${backdropUrl})`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            transition: "all .3s ease-in-out",
          }}
        >
          <SearchInput
            placeholder={"Search for images..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <h2 className={styles.resultText}>Result: {query}</h2>
        </div>
      ) : (
        <div className={styles.box}>
          <h1>
            Discover over 2,000,000 <br /> free Stock Images
          </h1>
          <SearchInput
            placeholder={"Search for images..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <p>
            Trending:
            <Link href={"/search/flower"}>flower</Link>
            <Link href={"/search/love"}>love</Link>
            <Link href={"/search/forest"}>forest</Link>
            <Link href={"/search/river"}>river</Link>
          </p>
        </div>
      )}
    </>
  )
}

export default SearchBox
