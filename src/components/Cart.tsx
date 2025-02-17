import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { removeFromCart, updateQuantity } from "../redux/slice/cartSlices";
import { Card } from "./ui/card";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="p-5 flex flex-col gap-2">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map(item => (
          <Card key={item.id} className="grid grid-cols-6 items-center p-4 border-b">
            <img src={item.image} alt={item.title} className="h-20 object-contain" />
            <h3 className="col-span-2">{item.title}</h3>
            <p>${item.price}</p>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) =>
                dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
              }
              className="border flex w-8 md:w-16 px-2 py-1"
            />
            <button
              className="bg-red-500 text-white p-2 rounded"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </button>
          </Card>
        ))
      )}
      <div className="text-right mt-4">
        <h3 className="text-xl">Total: ${totalPrice}</h3>
      </div>
    </div>
  );
};

export default Cart;
