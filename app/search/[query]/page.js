"use client"
import { useEffect, useState } from "react"
import axios from "axios"
import SearchBox from "@/app/components/SearchBox"
import Suggestion from "@/app/components/Suggestion"
import Gallary from "@/app/components/Gallary"
import Modal from "@/app/components/Modal"

export const metadata = {
  title: "Search Results | PhotoBay ",
  description: "Search Results | PhotoBay",
}

const page = ({ params }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResults] = useState("")
  const [synonyms, setSynonyms] = useState("")

  const fetchData = async () => {
    try {
      let response = await axios.get(
        `https://pixabay.com/api/?key=38529103-61638f93f15d0f945f1c06063&q=${params.query}&page=${currentPage}&image_type=photo`
      )
      let syResponse = await axios.get(
        `https://api.api-ninjas.com/v1/thesaurus?word=${params.query}`,
        {
          headers: {
            "x-api-key": "VIOU+dIPVtpvLvfTtrPk5Q==k3wTAt9C41wGAfmE",
          },
        }
      )
      setResults(response.data.hits)
      setSynonyms(syResponse.data.synonyms)
    } catch (e) {
      console.log("Error", e)
    }
  }

  const loadMoreResults = async () => {
    try {
      setIsLoading(true)
      const nextPage = currentPage + 1
      const additionalImages = await axios.get(
        `https://pixabay.com/api/?key=38529103-61638f93f15d0f945f1c06063&q=${params.query}&page=${currentPage}&image_type=photo`
      )
      setResults((result) => [...result, ...additionalImages.data.hits])
      setCurrentPage(nextPage)
      setIsLoading(false)
    } catch (error) {
      console.error("Error loading more results:", error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <main>
      <Modal />
      <SearchBox
        small
        query={params.query}
        backdropUrl={result[result.length - 1]?.largeImageURL}
      />
      <Suggestion synonyms={synonyms} />
      <Gallary data={result} loadMore={loadMoreResults} isLoading={isLoading} />
    </main>
  )
}

export default page
