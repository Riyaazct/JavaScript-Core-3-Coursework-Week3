let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

let quantityCalculation = (q, p) => q * p;

let total = 0;
console.log(`QTY    ITEM    TOTAL`);
order.forEach(({ itemName, quantity, unitPrice }) => {
  if (quantity > 1) {
    total = total + unitPrice * quantity;
  } else {
    total = total + unitPrice;
  }
  let productTotal = unitPrice * quantity;

  console.log(
    `${quantity}    ${itemName}   ${productTotal.toFixed(2)}`
  );
});
console.log(`
Total: ${total}
`);
