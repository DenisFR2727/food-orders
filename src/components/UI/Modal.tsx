import ReactDOM from "react-dom";
import { createPortal } from "react-dom";
import React, { Fragment } from "react";
import classes from "./Modal.module.scss";

interface ModalOverlayProps {
  children: React.ReactNode;
}

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Backdrop = (props: { onClose: () => void }) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props: ModalOverlayProps) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays-root") as
  | HTMLElement
  | DocumentFragment;

function Modal(props: ModalProps) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;
