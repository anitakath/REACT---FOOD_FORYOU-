import React, {Fragment, useState} from 'react'
import ReactDOM from 'react-dom'
import styles from './Modal.module.css'




    //backdropModal, 
    //cartModal


    const Backdrop = (props) =>{

        return(
            <div className={styles.backdrop}></div>
        )

    }

    const OverlayModal = (props) =>{
        
        return(
            <div className={styles.modal}> 
              <div className={styles.content}>{props.children}</div>
            
            </div>
        )
    }


const Modal = (props) =>{

    //const [openCart, setOpenCart] = useState(true)

    console.log(props.onOpenCart)



    return(
        <Fragment>
           {props.openCart && ReactDOM.createPortal(<Backdrop/>, document.getElementById('backdropModal'))}
           {props.openCart && ReactDOM.createPortal(<OverlayModal>{props.children}</OverlayModal>, document.getElementById('cartModal'))}
          
        
        </Fragment>
    )
}

export default Modal;