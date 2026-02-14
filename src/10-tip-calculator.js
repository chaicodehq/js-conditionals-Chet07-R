/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount= the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount= 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount= number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {
  if(billAmount <=0) return null;
  if(serviceRating <1 || serviceRating > 5 || !Number.isInteger(serviceRating)) return null;

  

  if(serviceRating === 1){
    const tipAmount= Number((billAmount*5/100).toFixed(2));
    return{
      tipPercentage: 5,
      tipAmount,
      totalAmount: billAmount + tipAmount
    };
  }
  else if(serviceRating === 2){
    const tipAmount= Number((billAmount*10/100).toFixed(2));
    return{
      tipPercentage: 10,
      tipAmount,   // if the variable is created we can directly use the variable name 
      totalAmount: billAmount + tipAmount
    };
  }
  else if(serviceRating === 3){
    const tipAmount= Number((billAmount*15/100).toFixed(2));
    return{
      tipPercentage: 15,
      tipAmount,
      totalAmount: billAmount + tipAmount
    };
  }
  else if(serviceRating === 4){
    const tipAmount= Number((billAmount*20/100).toFixed(2));
    return{
      tipPercentage: 20,
      tipAmount,
      totalAmount: billAmount + tipAmount
    };
  }
  else if(serviceRating === 5){
    const tipAmount= Number((billAmount*25/100).toFixed(2));
    return{
      tipPercentage: 25,
      tipAmount,
      totalAmount: billAmount + tipAmount
    };
  }
}
