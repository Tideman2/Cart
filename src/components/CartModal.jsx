import { forwardRef, useImperativeHandle, useRef, useContext } from 'react';
import { CartContext } from '../store/sopping-cart-context';
import { createPortal } from 'react-dom';
import Cart from './Cart.jsx';

const CartModal = forwardRef(function Modal(
  { title, actions },
  ref
) {
  const dialog = useRef();
  const { items, updatedItem} = useContext(CartContext)

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog id="modal" ref={dialog}>
      <h2>{title}</h2>
      <Cart />
      <form method="dialog" id="modal-actions">
        {actions}
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default CartModal;
