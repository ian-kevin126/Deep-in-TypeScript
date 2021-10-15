type ResolveType = (resolve_success: any) => void;
type RejectType = (reject_fail: any) => any;
type ExcutorType = (resolve: ResolveType, reject: RejectType) => any;

class Promise {
  private resolve!: ResolveType;
  private reject!: RejectType;
  constructor(excutor: ExcutorType) {
    this.resolve = (value: any) => {
      console.log('resolve', value);
      console.log(this);
    };
    this.reject = (reason: any) => {
      console.log('reject', reason);
    };
    excutor(this.resolve, this.reject);
  }
}

new Promise((resolve: ResolveType, reject: RejectType) => {
  setTimeout(() => {
    resolve('success');
    reject('error');
  }, 3000);
});

export default Promise;
