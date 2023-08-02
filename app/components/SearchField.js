import React from "react"

const SearchField = ({ query }) => {
  return (
    <div className={styles.box}>
      <SearchInput
        placeholder={"Search for images..."}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <h3>Results: {query}</h3>
    </div>
  )
}

export default SearchField
