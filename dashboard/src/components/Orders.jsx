import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import GeneralContext from "./GeneralContext";
import axios from "axios";
import API_BASE_URL from "../config";

function Orders() {
  const [orders, setOrders] = useState([]);
  const { holdingsUpdated } = useContext(GeneralContext);

  const fetchOrders = () => {
    axios.get(`${API_BASE_URL}/allOrders`).then((res) => {
      console.log("Orders Updated : ", res.data);
      setOrders(res.data);
    });
  };

  useEffect(() => {
    fetchOrders();
  }, [holdingsUpdated]);
  return (
    <>
      <div className="orders">
        {orders.length === 0 ? (
          <div className="no-orders">
            <p>You haven't placed any orders today</p>
            <NavLink to={"/"} className="btn">
              Get started
            </NavLink>
          </div>
        ) : (
          <div className="order-table">
            <h3>Orders ({orders.length})</h3>
            <table>
              <thead>
                <tr>
                  <th>Stock</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Type</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr
                    key={index}
                    className={order.mode === "BUY" ? "buy-row" : "sell-row"}
                  >
                    <td>{order.name}</td>
                    <td>{order.qty}</td>
                    <td>{order.price.toFixed(2)}</td>
                    <td className={order.mode === "BUY" ? "buy" : "sell"}>
                      {order.mode}
                    </td>
                    <td>{order.status || "Completed"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

export default Orders;
