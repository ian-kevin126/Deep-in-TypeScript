// 集合类
class Collection<T = any> {
  static collection: Collection = new Collection();
  private constructor() {}

  private containerMap = new Map<string | symbol, any>();

  public set(key: string | symbol, value: T) {
    this.containerMap.set(key, value);
  }

  public get(key: string | symbol): T {
    return this.containerMap.get(key);
  }

  public has(key: string | symbol): boolean {
    return this.containerMap.has(key);
  }
}

export default Collection.collection;
