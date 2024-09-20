// const router = require("express").Router();
// const { authenticateToken } = require("./userAuth");
// const Book = require("../models/book");
// const Order = require("../models/order");
// const User = require("../models/user");
// //place order
// router.post("/place-order", authenticateToken, async (req, res) => {
//   try {
//     console.log("backend");
//     const { id } = req.headers;
//     const { order } = req.body;
//     for (const orderData of order) {
//       const newOrder = new Order({ user: id, book: orderData._id });
//       const orderDataFromDb = await newOrder.save();
//       //saving order in user model
//       await User.findByIdAndUpdate(id, {
//         $push: { orders: orderDataFromDb._id },
//       });
//       //clring cart
//       await User.findByIdAndUpdate(id, { $pull: { cart: orderData._id } });
//     }
//     return res.json({
//       status: "success",
//       message: "Order Placed Successfully",
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "internal server error" });
//   }
// });
// //get order history of particular
// router.get("/get-order-history", authenticateToken, async (req, res) => {
//   try {
//     console.log("backend2");
//     const { id } = req.headers;
//     const userData = await User.findById(id).populate({
//       path: "orders",
//       populate: { path: "book" },
//     });
//     const ordersData = userData.orders.reverse();
//     return res.json({
//       status: "success",
//       data: ordersData,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "an error occured" });
//   }
// });
// //get all orders admin
// router.get("/get-all-orders", authenticateToken, async (req, res) => {
//   try {
//     const userData = await Order.find()
//       .populate({
//         path: "book",
//       })
//       .populate({
//         path: "user",
//       })
//       .sort({ createdAt: -1 });
//     return res.json({
//       status: "success",
//       data: userData,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "an error occured" });
//   }
// });
// //update order ...admin
// router.put("/update-status/:id", authenticateToken, async (req, res) => {
//   try {
//     const { id } = req.params;
//     await Order.findById(id, { status: req.body.status });
//     return res.json({
//       status: "success",
//       message: "Status Updated Successfully",
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "an error occured" });
//   }
// });
// module.exports = router;

const router = require("express").Router();
const { authenticateToken } = require("./userAuth");
const Book = require("../models/book");
const Order = require("../models/order");
const User = require("../models/user");

// Place order
router.post("/place-order", authenticateToken, async (req, res) => {
  try {
    console.log("Placing order");
    const { id } = req.headers; // User ID from headers
    const { order } = req.body; // Order data from request body

    if (!order || !Array.isArray(order)) {
      return res.status(400).json({ message: "Invalid order data" });
    }

    for (const orderData of order) {
      const newOrder = new Order({ user: id, book: orderData._id });
      const orderDataFromDb = await newOrder.save();

      // Saving order in user model
      await User.findByIdAndUpdate(id, {
        $push: { orders: orderDataFromDb._id },
      });

      // Clearing cart
      await User.findByIdAndUpdate(id, { $pull: { cart: orderData._id } });
    }

    return res.json({
      status: "success",
      message: "Order Placed Successfully",
    });
  } catch (error) {
    console.error("Error placing order:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Get order history of a particular user
router.get("/get-order-history", authenticateToken, async (req, res) => {
  try {
    console.log("Fetching order history");
    const { id } = req.headers; // User ID from headers

    const userData = await User.findById(id).populate({
      path: "orders",
      populate: { path: "book" },
    });

    if (!userData || !userData.orders) {
      return res.status(404).json({ message: "No orders found for this user" });
    }

    const ordersData = userData.orders.reverse();
    return res.json({
      status: "success",
      data: ordersData,
    });
  } catch (error) {
    console.error("Error fetching order history:", error);
    return res.status(500).json({ message: "An error occurred" });
  }
});

// Get all orders (admin)
router.get("/get-all-orders", authenticateToken, async (req, res) => {
  try {
    console.log("Fetching all orders");
    const userData = await Order.find()
      .populate("book")
      .populate("user")
      .sort({ createdAt: -1 });

    return res.json({
      status: "success",
      data: userData,
    });
  } catch (error) {
    console.error("Error fetching all orders:", error);
    return res.status(500).json({ message: "An error occurred" });
  }
});

// Update order status (admin)
router.put("/update-status/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body; // Get status from request body

    // Ensure status is provided
    if (!status) {
      return res.status(400).json({ message: "Status is required" });
    }

    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { status: status }, // Update the status
      { new: true } // Return the updated document
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    return res.json({
      status: "success",
      message: "Status Updated Successfully",
    });
  } catch (error) {
    console.error("Error updating order status:", error);
    return res.status(500).json({ message: "An error occurred" });
  }
});

module.exports = router;
