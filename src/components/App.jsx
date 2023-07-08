import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from "./ImageGallery"
import Button from './Button';
import SearchApi from "./SearchApi"
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';


class App extends Component {
  state = {
    value: null,
    page: 1,
    gallery: [],
    status: 'allow',
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { status, value, page } = this.state;

    if (status === 'allow') {
      this.setState({ status: 'loading' });
      SearchApi(value, page)
        .then(response => response.json())
        .then(ar =>
          this.setState(({ gallery }) => ({
            gallery: [...gallery, ...ar.hits],
            status: 'deny',
          }))
        );
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal, }));
  };

  onSubmit = name => {
    if (name === this.state.value) {
      return alert('Try another input value!');
    }
    this.setState({ value: name, page: 2, gallery: [], status: 'allow' });
  };

  onMore = () => {
    this.setState(prevSatate => ({
      page: prevSatate.page + 1,
      status: 'allow',
    }));
  };

  render() {
    const { gallery, status, showModal } = this.state;
    return (
      <>
        <button type='button' onClick={this.toggleModal}>Open</button>
        <Searchbar onChange={this.onSubmit} />
        <ImageGallery gallery={gallery} />
        {gallery.length > 0 && <Button onMore={this.onMore} />}
        {status === 'loading' && <Loader />}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Modal</h1>
          </Modal>
        )}
      </>
    );
  }
}


export default App;