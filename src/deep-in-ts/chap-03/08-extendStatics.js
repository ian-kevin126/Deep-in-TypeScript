console.log('******** ============ start ============ **********');

let extendStatics = (function (Son, Parent) {
  function getStaticExtendsWithForIn(Son, Parent) {
    for (let key in Parent) {
      if (Object.prototype.hasOwnProperty.call(Parent, key)) {
        Son[key] = Parent[key];
      }
    }
  }

  function getStaticExtendsWithObjectKeys(Son, Parent) {
    Object.keys(Parent).forEach(key => {
      Son[key] = Parent[key];
    });
  }

  function getStaticExtendsWithProto(Son, Parent) {
    Son.__proto__ = Parent;
  }

  let myExtendStatics = function (Son, Parent) {
    let func =
      Object.setPrototypeOf ||
      getStaticExtendsWithForIn ||
      getStaticExtendsWithObjectKeys ||
      getStaticExtendsWithProto;

    return func(Son, Parent);
  };

  return myExtendStatics;
})();

console.log('******** ============ end ============ **********');
export {};
