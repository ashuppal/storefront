
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../../store/actions';
import { When } from 'react-if';

const Cart = () => {
  // const classes = useStyles()
  const dispatch = useDispatch();
  const { cart } = useSelector(state => state);
  return (
    <>
      <When condition={cart.length > 0}>
        <div className="simple-cart">
          <ul>
            {cart.map((product, index) => (
              <li key={`cart-${index}`}>{product.name}
                <span onClick={() => dispatch(removeItem(product))}>x</span>
              </li>
            ))}
          </ul>
        </div>
      </When>
    </>
  )
};

export default Cart;