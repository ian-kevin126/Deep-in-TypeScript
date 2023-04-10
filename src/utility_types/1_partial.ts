interface PersonProps {
  name: string;
  age: number;
  email: string;
}

type PartialPerson = Partial<PersonProps>;

// 等价于:
// interface PersonProps {
//   name?: string | undefined;
//   age?: number | undefined;
//   email?: string | undefined;
// }

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: 'organize desk',
  description: 'clear clutter'
};

const todo2 = updateTodo(todo1, {
  description: 'throw out trash'
});

export {};
