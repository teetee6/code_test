// https://javascript.info/proxy
// https://stackoverflow.com/questions/6501160/why-is-pop-faster-than-shift

function WrapArray(_arr) {
  let shift_q = 0;
  let numlike = (_) => (isNaN(_) ? false : true);
  return new Proxy(_arr, {
    get(target, prop) {
      //   console.log("get called!");
      switch (prop) {
        case "shift":
          return (ret) => (
            (ret = target[shift_q]), delete target[shift_q++], ret
          );
          break;
        case "length":
          return target.length - shift_q;
          break;
        default:
          return target[numlike(prop) ? Number(prop) + shift_q : prop];
      }
    },
    set(target, prop, val) {
      //   console.log("set called!");
      switch (prop) {
        // case "length":
        //   target.length = val + shift_q;
        //   return true;
        //   break;

        default:
          //   console.log(target, prop, val);
          target[numlike(prop) ? Number(prop) + shift_q : prop] = val;
          this.length = target.length - shift_q;
          return true;
      }
    },
    has(target, prop) {
      //   console.log("has called!");
      return (numlike(prop) ? Number(prop) + shift_q : prop) in target;
    },
    deleteProperty(target, prop) {
      delete target[numlike(prop) ? Number(prop) + shift_q : prop];
      console.log(">>" + target, target.length, prop, shift_q);
      this.length = target.length;
      return true;
    },
    // [1,2,3,4,5], ?, 30
    apply(target, thisArg, argArray) {
      console.log("apply called!");
      //   target.call(thisArg, ...argArray);
      Array.prototype.call(thisArg, ...argArray);
    },
    construct(target, argArray, newTarget) {
      return new target(...argArray);
    },
  });
}

(function main() {
  arr = WrapArray([1, 2, 3, 4, 5]);
  arr.push(40, 50);
  console.log(arr, arr.length); // 1 2 3 4 5 40 50
  arr.shift(), arr.shift(); // 3 4 5 40 50
  console.log(arr, arr.length);
  //   console.log(arr[5]);
  arr.pop();
  console.log(arr);
})();
