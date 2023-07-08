import { createPortal } from 'react-dom'
import { Component } from 'react';
import css from "./Modal.module.css"

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
componentDidMount(){
    window.addEventListener('keydown',
        e => {
        if (e.code === 'Escape') {
            this.props.onClose();
            console.log("esc");
        }
    })
}

    
    render (){return createPortal(
      <div className={css.overlay}>
        <div className={css.modal}>{this.props.children}</div>
      </div>,
      modalRoot
    )}
}

export default Modal;