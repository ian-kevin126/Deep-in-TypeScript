import { ResolveType, RejectType, Executor } from './actionType';
type PromiseState = 'pending' | 'fulfilled' | 'rejected';

class Promise<T = any> {
  state: PromiseState = 'pending';
  constructor(executor: Executor) {
    let state: PromiseState = 'pending';
    const resolve: ResolveType = value => {
      if (this.state !== 'pending') {
        return;
      }
      this.state = 'fulfilled';

      console.log('resolve run');
    };
    const reject: RejectType = reason => {
      if (this.state !== 'pending') {
        return;
      }
      this.state = 'rejected';

      console.log('reject run');
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulFilled: ResolveType, onRejected: RejectType) {
    if (this.state === 'fulfilled') {
    }
  }
}

export default Promise;

// fulfilled rejected
