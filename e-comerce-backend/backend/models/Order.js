const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    cartId: {
      type: mongoose.Types.ObjectId,
      ref: "cart",
    },
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: true,
    },
    productId: {
      type: mongoose.Types.ObjectId,
      ref: "product",
      required: true,
    },
    count: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("order", orderSchema);
module.exports = Order;
