import { Filter } from 'lucide-react'

export const FilterBook = ({genres, showFilters,setShowFilters,setSelectedCategory, selectedCategory }) => {
  return (
    <div className="filter-sidebar">
    <div className="filter-sidebar__containe">
      <div className="filter-sidebar__header">
        <h2 className="filter-sidebar__title">Filtros</h2>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="filter-sidebar__toggle"
        >
          <Filter className="filter-sidebar__icon" />
        </button>
      </div>
      <div className={`filter-sidebar__content${showFilters ? 'block' : 'hidden md:block'}`}>
        <div className="filter-sidebar__genre">
          <h3 className="filter-sidebar__subtitle">Géneros</h3>
          {genres.length > 0 &&
            genres.map((genre) => (
              <button
                key={genre.id}
                onClick={() => setSelectedCategory(genre.id)}
                className={`filter-sidebar__genre-item block w-full text-left py-2 px-4 rounded ${
                  selectedCategory === genre.name
                    ? 'filter-sidebar__genre-item--active bg-blue-100 text-blue-700'
                    : 'hover:bg-gray-100'
                }`}
              >
                {genre.name}
              </button>
            ))}
        </div>
      </div>
    </div>
  </div>


    )
}
