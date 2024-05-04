// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้
inventory.apple = {price :35,quantity :200}
inventory.orange = {price :20,quantity :300}

let totalprice = 0;
for (let friut in inventory){
  totalprice = totalprice+(inventory[friut].price*inventory[friut].quantity);
}
console.log(`Total inventory value: ${totalprice} baht`);