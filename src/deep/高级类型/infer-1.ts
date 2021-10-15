interface Customer {
  custname: string;
  buymoney: number;
}

// type custFuncType = (cust: Customer) => string;

// type inferType<T> = T extends (params: infer P) => string ? P : T

// type inferResultType = inferType<custFuncType>

type custFuncType = (cust: Customer) => boolean;

type inferType<T> = T extends (params: any) => infer P ? P : T;

type inferResultType = inferType<custFuncType>;

export default void 0;
