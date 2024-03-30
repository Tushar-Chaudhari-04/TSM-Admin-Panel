import { useState } from "react";
import AdminSideBar from "../../components/AdminSideBar";
import { OrderItemType, OrderType } from "../../types";
import { Link } from "react-router-dom";

const img1 =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const orderItems: OrderItemType[] = [
  {
    _id: "azasddsfdsdsasd",
    name: "Nike Shoes",
    photo: img1,
    price: 999,
    quantity: 10,
  },
];
const TransactionManagement = () => {
  const [order, setOrder] = useState<OrderType>({
    name: "Tushar Chaudhari",
    address: "Mayur Niwas,Gyankanj",
    city: "Pune",
    state: "Maharashtra",
    pinCode: 424101,
    country: "India",
    status: "Cancelled",
    subtotal: 9990,
    discount: 999,
    shippingCharges: 20,
    tax: 1618,
    total: 0,
    orderItems,
    _id: "posajskakwsqans",
  });

  const {
    name,
    address,
    city,
    country,
    state,
    pinCode,
    subtotal,
    shippingCharges,
    tax,
    discount,
    status,
  } = order;

  const updateHandler = () => {
    setOrder((prev:any) => ({
      ...prev,
      status: prev.status == "Processing" ? "Shipped" : "Delivered",
    }));
  };
  return (
    <div className="admin-container">
      <AdminSideBar />
      <main className="product-management-container">
        <section style={{ padding: "1.2rem" }}>
          <h2>Cart Items</h2>
          {order.orderItems.map((item:any) => (
            <ProductCard
              name={item.name}
              quantity={item.quantity}
              photo={item.photo}
              price={item.price}
              _id={item._id}
            />
          ))}
        </section>
        <article className="shipping-info-card">
          <h1>Order Info</h1>
          <h5>User Info</h5>
          <p>Name:{name}</p>
          <p>Address:{`${address},${city},`}</p>
          <p>{`${state},${country},${pinCode}`}</p>
          <h5>Amount Info</h5>
          <p>SubTotal:{subtotal}</p>
          <p>ShippingCharges:{shippingCharges}</p>
          <p>Tax:{tax}</p>
          <p>Discount:{discount}</p>
          <p>Total:{`${subtotal - discount + shippingCharges + tax}`}</p>
          <h5>Status Info</h5>
          <p>
            Status:{"  "}
            <span
              style={
                status == "Processing"
                  ? { color: "orange" }
                  : status == "Shipped"
                  ? { color: "blue" }
                  : status == "Delivered"
                  ? { color: "green" }
                  : { color: "red" }
              }
            >
              <h3 style={{ display: "inline-block" }}>{status}</h3>
            </span>
          </p>
          <button onClick={updateHandler}>Process Order</button>
        </article>
      </main>
    </div>
  );
};

const ProductCard = ({ name, photo, price, quantity, _id }: OrderItemType) => {
  return (
    <div className="transaction-product-card">
      <img src={photo} alt={name} />
      <Link to={`/product/${_id}`}>{name}</Link>
      <span>{`${price} X ${quantity} = ${price * quantity}`}</span>
    </div>
  );
};

export default TransactionManagement;
