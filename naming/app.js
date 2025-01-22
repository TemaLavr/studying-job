// код до правильного именования
// function pp(u) {
//     let x = 0;
//     u.forEach(i => {
//       x += i;
//     });
//     return x;
//   }
  
//   let aa = [10000, 20000, 30000];
//   console.log(pp(aa));

// -------------------------------

// код после правильного именования
function calculateTopCustomersTotal(customerPurchases) {
    let totalSpent = 0;
    customerPurchases.forEach(purchaseAmount => {
      totalSpent += purchaseAmount;
    });
    return totalSpent;
  }
  
  let topCustomerPurchases = [10000, 20000, 30000]; 
  console.log(calculateTopCustomersTotal(topCustomerPurchases));
