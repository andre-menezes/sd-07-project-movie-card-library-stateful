import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SeachBar extends Component {
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
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="text-input" data-testid="text-input-label">
            Inclui o texto:
            <input
              type="text"
              value={searchText}
              onChange={onSearchTextChange}
              data-testid="text-input"
            />
          </label>
          <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              type="checkbox"
              checked={bookmarkedOnly}
              onChange={onBookmarkedChange}
              data-testid="checkbox-input"
            />
          </label>
          <label htmlFor="select-input" data-testid="select-input-label">
            Filtrar por gênero
            <select
              value={selectedGenre}
              onChange={onSelectedGenreChange}
              data-testid="select-input"
            >
              <option value="" data-testid="select-option">
                Todos
              </option>
              <option value="action" data-testid="select-option">
                Ação
              </option>
              <option value="comedy" data-testid="select-option">
                Comédia
              </option>
              <option value="thriller"data-testid="select-option">
                Suspense
              </option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default SeachBar;

SeachBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.callback,
  bookmarkedOnly: PropTypes.boolean,
  onBookmarkedChange: PropTypes.callback,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.callback,
}.isRequired;
