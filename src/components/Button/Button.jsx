import { Component } from 'react';

class Button extends Component{
    state = {
    }

  onButtonClick = () => {
      this.props.onMore()
    }

    render() {
        return (
          <button type="button" onClick={this.onButtonClick}>
            Load more
          </button>
        );
    }
}

export default Button;