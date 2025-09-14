import SearchBar from '../SearchBar'

export default function SearchBarExample() {
  const handleSearch = (query: string, category?: string) => {
    console.log('Search executed:', { query, category });
  };

  return <SearchBar onSearch={handleSearch} />
}