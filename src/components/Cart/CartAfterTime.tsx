import React, { Fragment, useEffect, useState } from "react";
import Modal from "../UI/Modal";

function CartAfterTime() {
  const [timeCart, setTimeCart] = useState<boolean>(false);

  useEffect(() => {
    const time = 0;
    setTimeout(() => {
      setTimeCart(true);
    }, 3000);
    return () => clearTimeout(time);
  }, []);

  const closeHandle = () => {
    setTimeCart(false);
  };
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeHandle();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);
  return (
    <Fragment>
      {timeCart && (
        <Modal onClose={closeHandle}>
          <div>Modal After Time</div>
        </Modal>
      )}
    </Fragment>
  );
}

export default CartAfterTime;
