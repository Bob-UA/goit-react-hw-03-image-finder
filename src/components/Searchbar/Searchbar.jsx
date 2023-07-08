import { Component } from 'react';

class Searchbar extends Component{
  state = {
    value: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onChange(this.state.value);
    this.setState({ value: "" });
  }

  handleChange = e => {
    this.setState({value: e.currentTarget.value})
  };


  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.onSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            onChange={this.handleChange}
            className="input"
            type="text"
            value={this.state.value}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
