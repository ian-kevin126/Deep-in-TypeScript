interface Todo {
  title: string;
  completed: boolean;
  description: string;
}

let todoList: Todo[] = [
  {
    title: '开发权限管理模块',
    completed: true,
    description: '使用vue3+typescript来开发'
  },
  {
    title: '年会',
    completed: false,
    description: '12月29日上午菲亚特大酒店'
  }
];

// 作业：怎么实现完成这个数组 只允许保留 title 和 completed这两个属性

type Record<T> = {
  [P in keyof any]: T;
};

// type A = {
//   title: string;
//   completed: boolean;
// }
type A = Pick<Todo, 'title' | 'completed'>;

// type B = {
//   [x: string]: A;
// }
type B = Record<A>;

function convertSubTodoItemList() {
  return todoList.reduce((prev, item) => {
    return {
      ...prev,
      [item.title]: item
    };
  }, {} as Record<Pick<Todo, 'title' | 'completed'>>);
}

export {};
