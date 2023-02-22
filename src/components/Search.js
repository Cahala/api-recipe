export default function Search({getRecipes, setSearch}){
    
    const handleSubmit = (event) =>{
        event.preventDefault()
    }

    const handleSearch = (event) =>{
        setSearch(event.target.value)
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="Bananpannekaker.." onChange={handleSearch} />
            <button onClick={getRecipes} type="submit">Søk</button>
        </form>
    )
}