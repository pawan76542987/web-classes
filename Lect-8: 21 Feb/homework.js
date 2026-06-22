// function OrderFood(item, CookFood) {
//   console.log("Order placed");
//   setTimeout(() => {
//     console.log("Order confirmed");
//     CookFood(item, DeliverFood);
//   }, 1000);
// }

// function CookFood(item, DeliverFood) {
//   console.log("Cooking starts");
//   setTimeout(() => {
//     console.log("Cooking complete");
//     let cookedItem = "Cooked " + item;
//     DeliverFood(cookedItem);
//   }, 2000);
// }

// function DeliverFood(cookedItem) {
//   console.log("Delivery started");
//   setTimeout(() => {
//     console.log("Delivered");
//     let deliveryStatus = cookedItem + " - Delivered at your door";
//   }, 1500);
// }
// OrderFood("EggCurry", CookFood);



// function FetchEmail(emailId, ScanForVirus) {
//   console.log("Fetching email...");
//   setTimeout(() => {
//     let email = { id: emailId, content: "Hello World" };
//     ScanForVirus(email, MoveToInbox);
//   }, 1000);
// }

// function ScanForVirus(email, MoveToInbox) {
//   console.log("Scanning for virus...");
//   setTimeout(() => {
//     email.scanned = true;
//     MoveToInbox(email);
//   }, 1500);
// }

// function MoveToInbox(email) {
//   console.log("Moving to inbox...");
//   setTimeout(() => {
//     email.location = "inbox";
//   }, 1000);
// }
// FetchEmail("email", ScanForVirus);



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