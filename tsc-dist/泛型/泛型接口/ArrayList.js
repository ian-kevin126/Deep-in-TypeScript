"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = __importDefault(require("./LinkedList"));
/**
 * 把Array数组改写重构提升为Java简易版的ArrayList
 */
var ArrayList = /** @class */ (function () {
    function ArrayList() {
        this.index = 0;
        this.array = [];
    }
    ArrayList.prototype.size = function () {
        return this.index ? this.index : 0;
    };
    // 往数组中添加元素
    ArrayList.prototype.add = function (ele) {
        //console.log("this.kk * 3:", this.kk * 3);
        this.checkIndex();
        this.array[this.index++] = ele;
    };
    ArrayList.prototype.checkIndex = function () {
        if (this.index < 0) {
            throw new Error("数组下标不能为零");
        }
    };
    // 第二步：根据索引来查询数组中指定元素
    ArrayList.prototype.get = function (index) {
        return this.array[index];
    };
    // 第三步: 显示方法
    ArrayList.prototype.show = function () {
        this.array.forEach(function (ele) {
            console.log(ele);
        });
    };
    //remove(value: number | object): number | object {
    ArrayList.prototype.remove = function (value) {
        this.array = this.array.filter(function (ele, index) {
            //如果是根据数字【元素索引】去删除元素，remove方法返回的是一个数字
            if (typeof value === "number") {
                return value !== index;
            }
            else {
                // 如果是根据对象去删除元素，remove方法返回的是一个对象
                return value !== ele;
            }
        });
        return value;
    };
    return ArrayList;
}());
exports.default = ArrayList;
// 多态体现在： 1.父类对象变量可以接受任何它的子类对象
//  2. 接口类型对象变量可以接受任何它的实现类的对象
var arrayList = new LinkedList_1.default();
arrayList.add("王五");
arrayList.add("吴俊泽");
arrayList.add("张海同");
arrayList.add("周陈平");
arrayList.add("陈平");
arrayList.add("霍东阁");
arrayList.add("张洪海");
