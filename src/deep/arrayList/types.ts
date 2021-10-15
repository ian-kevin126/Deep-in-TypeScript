export interface List<T> {
  add(ele: T): void;
  size(): number;
  get(index: number): T | undefined;
  show(): void;
  // remove(index: number): number;
  remove(item: T): T;
}
