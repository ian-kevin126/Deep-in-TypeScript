function QQUsers(QQNo_, QQAge_, QQMark_) {
  this.QQNo = QQNo_;
  this.QQAge = QQAge_;
  this.QQMark = QQMark_;
  // 对象、数组、函数都是引用类型
  //   this.commonFriends = ['ian', 'tom', 'kevin'];
  //   this.show = function () {
  //     console.log(`QQ号: ${this.QQNo}，QQ龄：${this.QQAge}，QQ标注：${this.QQMark}`);
  //     console.log(`共同好友：${this.commonFriends}`);
  //   };
}

QQUsers.prototype.commonFriends = [1, 2, 3, 4];
const QQZhangSan = new QQUsers('21121', 121, 'ww1wqw');

QQUsers.prototype = {
  commonFriends: ['21', '212', 3132]
};

console.log(QQZhangSan.commonFriends); // [1, 2, 3, 4]
