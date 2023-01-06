console.log('******** ============ start ============ **********');

// 1，对现有的数组进行封装
// 2，提供get、remove、add方法，其中remove用重载来实现

type Student = {
  name: string;
  age: number;
};

class ArrayList {
  // 第一步，定义一个引用属性【数组】
  constructor(public element: Array<Student>) {}

  // 第二步，根据索引来查询数组中指定的元素
  get(index: number) {
    return this.element[index];
  }

  // 第三步，显示方法
  show() {
    this.element.forEach((ele, index) => {
      console.log(`${index}：`, ele);
    });
  }

  // 如果是根据数字删除元素，返回一个数字，如果是根据对象删除元素，返回一个对象
  remove(value: number): number;
  remove(value: Student): Student;
  remove(value: number | Student): number | Student {
    if (typeof value === 'number') {
      this.element.splice(value, 1);
      return value;
    } else {
      const idx = this.element.findIndex(ele => ele.name === value.name);
      this.element.splice(idx, 1);
      return value;
    }
  }
}

const stu_1 = { name: 'stu_1', age: 18 };
const stu_2 = { name: 'stu_2', age: 22 };
const stu_3 = { name: 'stu_3', age: 33 };
const arr = new ArrayList([stu_1, stu_2, stu_3]);
arr.show();
console.log('==============');
arr.remove(0);
arr.show();
console.log('==============');
arr.remove({ name: 'stu_2', age: 22 });
arr.show();

console.log('******** ============ end ============ **********');
export {};
