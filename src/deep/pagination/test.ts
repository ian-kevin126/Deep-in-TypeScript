import Pager from './Pager';
import { Food } from './Entity';
import { FoodDao } from './Dao';

const foodDot = new FoodDao();
const allFoods = foodDot.findAllFoods();
const pager = new Pager<Food>(2);
pager.dataList = allFoods;
const { data } = pager.showCurrentPageData();

data.forEach(food => {
  console.log(food.foodName);
});

// --------------------------------------------------------------------------------------------

// function returnObjectValue<T, U extends keyof T>(data: T, key: U): T[U] {
//   return data[key];
// }

// var obj = {
//   a: 1,
//   b: 2,
//   c: 3
// };

// returnObjectValue(obj, 'd');

// --------------------------------------------------------------------------------------------
