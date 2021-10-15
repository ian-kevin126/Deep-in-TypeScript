import Promise from './Promise';

const promise = new Promise((resolve, reject) => {
  resolve();
  reject();
});
console.log(promise);
