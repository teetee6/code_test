// https://www.zerocho.com/category/JavaScript/post/5800b4831dfb250015c38db5
// 무키아누스가 베스파시아누스를 관찰하고 있다가, 베스파시아누스가 특정 행동을 하니까 자동으로 무키아누스에게 그 소식이 전달됩니다. 베스파시아누스가 1점을 딴 것을 확인할 수 있습니다.

// 변화가 있을때마다 알림을 보낼 자
class Vespasianus {
  constructor() {
    this.subscribers = [];
  }
  //구독자들에게 알림이 간다
  publish() {
    this.subscribers.every((subscriber) => {
      subscriber.fire(this);
      return true;
    });
  }
  register(target) {
    this.subscribers.push(target);
  }
}
// 구독자
class Mucianus {
  constructor() {
    this.list = [];
  }
  subscribe(target) {
    this.list.push({
      target: target,
      point: 0,
    });
    target.register(this);
  }
  unsubscribe(target) {
    this.list = this.list.filter((person) => person.target !== target);
  }
  fire(target) {
    console.log("Fired!!!\n");
    this.list.some((person) => {
      console.log(person.target, target, person.target === target);
      if (person.target === target) {
        ++person.point;
        return true;
      }
    });
  }
}
(function main() {
  var vespasianus = new Vespasianus();
  var mucianus = new Mucianus();
  mucianus.subscribe(vespasianus);
  vespasianus.publish();
  //   console.log(mucianus.list); // [{ target: Vespasianus, point: 1 }]
})();
