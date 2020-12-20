import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    let value = target.type === 'checkbox' ? target.checked : target.value;
    if (target.type === 'number') {
      value = parseFloat(value);
    }
    this.setState({ [target.name]: value });
  }

  handleClick(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form" className="form form-bottom">
        <h2 className="form-title">Adicionar filme à biblioteca</h2>
        <div className="input">
          <label data-testid="title-input-label" htmlFor="title" className="form-label">
            Título
            <input
              name="title"
              type="text"
              data-testid="title-input"
              value={title}
              onChange={this.handleChange}
              maxLength="50"
              className="form-input"
            />
          </label>

          <label data-testid="subtitle-input-label" htmlFor="subtitle" className="form-label">
            Subtítulo
            <input
              name="subtitle"
              type="text"
              data-testid="subtitle-input"
              value={subtitle}
              onChange={this.handleChange}
              maxLength="50"
              className="form-input"
            />
          </label>

          <label data-testid="image-input-label" htmlFor="imagePath" className="form-label">
            Imagem
            <input
              name="imagePath"
              type="text"
              data-testid="image-input"
              value={imagePath}
              onChange={this.handleChange}
              className="form-input"
            />
          </label>

          <label data-testid="storyline-input-label" htmlFor="storyline" className="form-label">
            Sinopse
            <textarea
              name="storyline"
              data-testid="storyline-input"
              value={storyline}
              onChange={this.handleChange}
              maxLength="500"
              className="form-input form-textarea"
            />
          </label>

          <label data-testid="rating-input-label" htmlFor="rating" className="form-label">
            Avaliação
            <input
              name="rating"
              type="number"
              data-testid="rating-input"
              value={rating}
              onChange={this.handleChange}
              className="form-input form-rating"
            />
          </label>

          <label data-testid="genre-input-label" htmlFor="genre" className="form-label">
            Gênero
            <select
              name="genre"
              data-testid="genre-input"
              value={genre}
              onChange={this.handleChange}
              className="form-input form-select"
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
        </div>

        <button
          data-testid="send-button"
          onClick={this.handleClick}
          className="form-button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
