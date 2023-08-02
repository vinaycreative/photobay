import DynamicBackground from "./components/DynamicBackground"
import SearchBox from "./components/SearchBox"
import Container from "./containers/Container"

export default function Home() {
  return (
    <>
      <DynamicBackground />
      <main style={{ position: "relative", zIndex: 2 }}>
        <Container>
          <SearchBox />
        </Container>
      </main>
    </>
  )
}
