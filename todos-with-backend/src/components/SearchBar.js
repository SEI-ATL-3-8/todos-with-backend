const SearchBar = (props) => {  
  return (
    <input
      value={props.searchTerm}
      onChange={(e) => { props.setSearchTerm(e.target.value) }}
    />
  )
}

export default SearchBar
