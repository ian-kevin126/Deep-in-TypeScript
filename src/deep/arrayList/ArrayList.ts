// 1.对现有的数组进行封装，让数组增删改变得更加好用
// 2.提供get方法 remove方法 显示方法【add方法】
// 其中需求中的remove方法中有两个，我们用方法重载来实现

import { List } from './types';

export default class ArrayList<T = any> implements List<T> {
  constructor(public element: T[] = []) {}

  add(ele: T) {
    this.element.push(ele);
  }

  size() {
    return this.element.length;
  }

  get(index: number): T | undefined {
    return this.element[index];
  }

  show() {
    this.element.forEach(el => {
      console.log(el);
    });
  }

  remove(index: number): number;
  remove(item: T): T;
  remove(indexOrItem: number | T): number | T | undefined {
    const len = this.element.length;
    this.element = this.element.filter((v, i) => {
      // 如果根据数字去删除元素 返回的是一个数字
      if (typeof indexOrItem === 'number') {
        return indexOrItem !== i;
      } else {
        // 如果是根据对象去删除元素 返回的是被删除对象
        return indexOrItem !== v;
      }
    });

    if (typeof indexOrItem === 'number' || this.element.length !== len) {
      return indexOrItem;
    }
    return undefined;
  }
}

const arrayList = new ArrayList<string>();
arrayList.add('a');
arrayList.add('b');
arrayList.add('c');
arrayList.add('d');
arrayList.get(6);
