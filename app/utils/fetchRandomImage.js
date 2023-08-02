import Axios from "axios"

const fetchRandomImage = async () => {
  try {
    const PIXABAY_API_KEY = "38529103-61638f93f15d0f945f1c06063" // Replace with your Pixabay API key
    const PIXABAY_API_URL = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=nature&image_type=photo&per_page=100`

    const response = await Axios(PIXABAY_API_URL)
    const data = await response.data

    if (data.hits && data.hits.length > 0) {
      // Get a random image URL from the API response
      const randomIndex = Math.floor(Math.random() * data.hits.length)
      const imageUrl = data.hits[randomIndex].largeImageURL

      return imageUrl
    }
  } catch (error) {
    console.log(error)
  }

  return "" // Return an empty string if no image is fetched
}

export default fetchRandomImage
