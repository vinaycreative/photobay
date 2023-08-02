import SearchBox from "@/app/components/SearchBox"
import Suggestion from "@/app/components/Suggestion"
import Gallary from "@/app/components/Gallary"

export const metadata = {
  title: "Search Results | PhotoBay ",
  description: "Search Results | PhotoBay",
}

const page = () => {
  return (
    <main>
      <SearchBox small query={"....."} />
      <Suggestion loading />
      <Gallary fakedata={true} />
    </main>
  )
}

export default page
