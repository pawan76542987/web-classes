function PlaceOrder(productId, ProcessPayment) {
  console.log("Placing order...");
  setTimeout(() => {
    let order = { id: productId, status: "placed" };
    ProcessPayment(order, ShipOrder);
  }, 1000);
}

function ProcessPayment(order, ShipOrder) {
  console.log("Processing payment...");
  setTimeout(() => {
    order.status = "paid";
    order.transactionId = "TXN" + Date.now();
    ShipOrder(order);
  }, 2000);
}

function ShipOrder(order) {
  console.log("Shipping order...");
  setTimeout(() => {
    order.status = "shipped";
    order.trackingId = "TRACK" + Math.random().toString(36).substr(2, 9);
  }, 1500);
}
PlaceOrder("Shoes", ProcessPayment);