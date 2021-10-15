class Subject {
  constructor(public subid: number, public subname: string) {}
}
let chineseSubject = new Subject(100, '语文');
let mathSubject = new Subject(101, '数学');
let englishSubject = new Subject(105, '英语');

let setZhangSanSubject = new Set<Subject>([chineseSubject, mathSubject, englishSubject]);
type ss = typeof setZhangSanSubject;
type ElementOf0<T> = T extends Set<infer U> ? U : never;

let res: ElementOf0<string>;

export default void 0;
