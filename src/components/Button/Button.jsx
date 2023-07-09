import { Component } from 'react';
import css from "./Button.module.css";

class Button extends Component{
    state = {
    }

  onButtonClick = () => {
      this.props.onMore()
    }

    render() {
        return (
          <button
            type="button"
            className={css.Button}
            onClick={this.onButtonClick}
          >
            Load more
          </button>
        );
    }
}

export default Button;