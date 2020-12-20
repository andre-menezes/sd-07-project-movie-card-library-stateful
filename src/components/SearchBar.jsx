import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form" className="form form-searchbar">
        <label htmlFor="search-input" data-testid="text-input-label">
          Inclui o texto:
          <input
            name="search-input"
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
            data-testid="text-input"
            className="form-input search-input"
          />
        </label>

        <label htmlFor="bookmarked-input" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            name="bookmarked-input"
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
            data-testid="checkbox-input"
            className="form-checkbox"
          />
        </label>
        <label htmlFor="select-input" data-testid="select-input-label">
          Filtrar por gênero
          <select
            type="select-input"
            value={selectedGenre}
            onChange={onSelectedGenreChange}
            data-testid="select-input"
            className="form-select searchbar-select"
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
