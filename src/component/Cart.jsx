import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseItem,
  decreaseItem,
  deleteItem,
  checkout,
} from "../redux/cartSlice";
import { Button, Drawer, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Cart = ({ drawerOpen, toggleDrawer }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const [message, setMessage] = React.useState("");
  const [severity, setSeverity] = React.useState("success");
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const [open, setOpen] = React.useState(false);
  const handleIncrease = (id) => {
    dispatch(increaseItem(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseItem(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };
  const handleCheckout = () => {
    if (cartItems.length > 0) {
      setMessage("Your order is successfully processed!");
      setSeverity("success");
      dispatch(checkout());
      setOpenSnackbar(true);
    } else {
      setMessage("Please add some products to the cart.");
      setSeverity("warning");
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div>
      <Drawer
        style={{ width: "700px" }}
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <div style={styles.cartContainer}>
          <h2 style={styles.heading}>Your Cart</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Add</th>
                <th>Remove</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} style={styles.row}>
                  <td>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={styles.image}
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price * item.quantity}</td>
                  <td>
                    <button
                      onClick={() => handleIncrease(item.id)}
                      disabled={item.stock === 0}
                      style={styles.button}
                    >
                      +
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDecrease(item.id)}
                      
                      style={styles.button}
                    >
                      -
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(item.id)}
                      style={styles.deleteButton}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={styles.summaryContainer}>
            <div style={styles.summaryBox}>
              <p>Total Quantity: {totalQuantity}</p>
              <p>Total Bill: ${totalAmount}</p>
            </div>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCheckout}
              disabled={cartItems.length === 0}
              style={styles.checkoutButton}
            >
              CHECKOUT ITEMS
            </Button>
            {open && (
              <div
                style={{ color: severity === "success" ? "green" : "orange" }}
              >
                {message}
              </div>
            )}
          </div>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          message={message}
          action={
            <>
              <IconButton
                size="small"
                color="inherit"
                onClick={handleCloseSnackbar}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </>
          }
        />
      </Drawer>
    </div>
  );
};

const styles = {
  cartContainer: {
    padding: "20px",
    width: "400px",
    maxWidth: "100%",
    backgroundColor: "#f9f9f9",
  },

  heading: { color: "#E91E63", textAlign: "center" },

  table: { width: "100%", borderCollapse: "collapse", marginBottom: "20px" },

  row: { textAlign: "center" },
  image: {
    width: "50px",
    height: "50px",
    objectFit: "cover",
    borderRadius: "5px",
  },

  button: {
    padding: "5px 10px",
    backgroundColor: "#f0f0f0",
    border: "1px solid #ccc",
    cursor: "pointer",
  },

  deleteButton: {
    padding: "5px 10px",
    backgroundColor: "#ff4d4d",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
  summaryContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "20px",
  },
  summaryBox: {
    backgroundColor: "#ff3366",
    color: "#fff",
    padding: "10px",
    borderRadius: "5px",
  },
  checkoutButton: {
    padding: "10px 20px",
    backgroundColor: "#E91E63",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default Cart;
