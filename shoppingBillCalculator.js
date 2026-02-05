/* Function name: calcBill(prices, items)
Statement:  Calculate total bill amount and count how many times each item appears.
Test case 1
Input: 
     prices = { rice: 70, oil: 180, egg: 12, sugar: 90 };
     items = ["egg", "egg", "rice", "oil", "egg", "sugar"];

Output:
{
  total: 376,
  itemCount: { egg: 3, rice: 1, oil: 1, sugar: 1 }
}

Test case 2
Input:
prices = { pen: 10, book: 50 };
items = ["pen", "pen", "book", "pen"];

Output:
{
  total: 80,
  itemCount: { pen: 3, book: 1 }
}
 */

// let prices = { rice: 70, oil: 180, egg: 12, sugar: 90 };    
// let items = ["egg", "egg", "rice", "oil", "egg", "sugar"];

prices = { pen: 10, book: 50 };
items = ["pen", "pen", "book", "pen"];


function calcBill(prices, items){
    let itemCount = {};
    for(let i of items){
        if(itemCount.hasOwnProperty(i)){
            itemCount[i]++;
        }
        else{
            itemCount[i] = 1;
        }
    }
    let total = 0;
    for(const i in itemCount){
        let price = prices[i];
        let quantity = itemCount[i]
        total+= price*quantity;
    }

    return {
        total,
        itemCount: itemCount,
    };

}

console.log(calcBill(prices, items));