
const handleChange = (e) => {
    console.log(e.currentTarget);
}
const onSubmit = e => {
        e.preventDefault();
    };

const Searchbar = () => {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={onSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            onChange={handleChange}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
}

export default Searchbar;