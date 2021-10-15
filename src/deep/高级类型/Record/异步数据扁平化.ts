const goodSymid = Symbol('goodid');
interface Goods {
  [goodSymid]: number;
  name: string;
  price: number;
}

type Record<T extends keyof any, K> = {
  [P in T]: K;
};

type resultGoodsType = Record<number, Goods>;

let goodRecord: Record<number, Goods> = {};

// => { 101: { [goodSymid]: 101, name: '苹果', price: 9 } }
let goods: Goods = {
  [goodSymid]: 101,
  name: '苹果',
  price: 9
};

// goodRecord[101] = { [goodSymid]: 101, name: '苹果', price: 9 };
goodRecord[goods[goodSymid]] = goods;

const goodsList: Goods[] = [
  {
    [goodSymid]: 101,
    name: '苹果',
    price: 9
  },
  {
    [goodSymid]: 102,
    name: '香蕉',
    price: 3
  },
  {
    [goodSymid]: 103,
    name: '草莓',
    price: 21
  }
];

/**
 * {
 *   [goodSymid]: 101, name: '苹果', price: 9,
 *   [goodSymid]: 102, name: '香蕉', price: 3,
 *   [goodSymid]: 103, name: '草莓', price: 21
 * }
 */

let goodRecord2: Record<number, Goods> = {};
goodsList.forEach(goods => {
  goodRecord2[goods[goodSymid]] = goods;
});
console.log(goodRecord2);

export default void 0;
