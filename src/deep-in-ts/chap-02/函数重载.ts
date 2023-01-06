console.log('******** ============ start ============ **********');

type MessageType = 'image' | 'audio' | string;
type Message = {
  id: number;
  type: MessageType;
  sendMessage: string;
};

// let messages: Message[] = [
let messages: Array<Message> = [
  { id: 1, type: 'image', sendMessage: '你好啊，今晚一起去三里屯把！' },
  { id: 2, type: 'audio', sendMessage: '朝辞白帝彩云间，千里江陵一日还' },
  { id: 3, type: 'audio', sendMessage: 'hello world' },
  { id: 4, type: 'image', sendMessage: '雇佣者' },
  { id: 5, type: 'image', sendMessage: '好好听话' }
];

// 不使用函数重载的实现，可读性、可维护性变差
// function getMessageFromWechat(payload: number | MessageType): Message | Message[] | undefined {
//   if (typeof payload === 'number') {
//     return messages.find(msg => msg.id === payload);
//   } else {
//     return messages.filter(msg => msg.type === payload);
//   }
// }

// const msg = getMessageFromWechat(2);
// console.log(msg.sendMessage); // 虽然能输出正确的值，但是代码报错了

// 函数重载的实现
function getMessageFromWechat(id: number): Message; // 函数签名
function getMessageFromWechat(msgType: MessageType, count: number): Message[]; // 函数签名
// 函数的实现签名，实际调用的时候是函数签名
function getMessageFromWechat(
  payload: unknown,
  count: number = 1
): Message | Message[] | undefined {
  if (typeof payload === 'number') {
    return messages.find(msg => msg.id === payload);
  } else {
    return messages.filter(msg => msg.type === payload).slice(0, count);
  }
}

const msg = getMessageFromWechat('image', 2);
console.log(msg);

// console.log('image', getMessageFromWechat('image'));

console.log('******** ============ end ============ **********');
export {};
