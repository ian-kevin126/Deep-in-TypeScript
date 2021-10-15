// 微信消息类型
type MessageType = 'image' | 'audio' | string;

type Message = {
  id: number;
  type: MessageType;
  sendMessage: string;
};

const message: Message[] = [
  {
    id: 1,
    type: 'image',
    sendMessage: '你好啊，今晚咱们一起去三里屯吧'
  },
  {
    id: 2,
    type: 'audio',
    sendMessage: '朝辞白帝彩云间，千里江陵一日还'
  },
  {
    id: 3,
    type: 'audio',
    sendMessage: '你好！张无忌'
  },
  {
    id: 4,
    type: 'image',
    sendMessage: '刘老根苦练舞台绝技！'
  }
];

// 上头这两个叫做重载签名（至少有一个，可以有多个）
function getMessage2(id: number, name: string): Message;
function getMessage2(msgType: MessageType, readRecordCount: number): Message[];
// 实现签名函数，只有实现
function getMessage2(
  payloadFrompage: number | MessageType,
  readRecordCount: string | number
): Message | Message[] | undefined {
  console.log(readRecordCount); // => test

  if (typeof payloadFrompage === 'number') {
    return message.find(v => v.id === payloadFrompage);
  } else {
    if (typeof readRecordCount === 'number') {
      return message.filter(v => v.type === payloadFrompage).slice(0, readRecordCount);
    }
    return message.filter(v => v.type === payloadFrompage);
  }
}

const res = getMessage2(1, 'test');

// ----------------------------------------------------------------------

function getMessage(id: number, name: string): Message;
function getMessage(msgType: MessageType, readRecordCount: number): Message[];
function getMessage(payloadFrompage: any, readRecordCount: any) {
  console.log(readRecordCount); // => test
  if (typeof payloadFrompage === 'number') {
    return message.find(v => v.id === payloadFrompage);
  } else {
    if (typeof readRecordCount === 'number') {
      return message.filter(v => v.type === payloadFrompage).slice(0, readRecordCount);
    }
    return message.filter(v => v.type === payloadFrompage);
  }
}

const res2 = getMessage(1, 'test');
