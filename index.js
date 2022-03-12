import { WakuMessage } from "js-waku";
import { Waku } from "js-waku";

const waku = await Waku.create({ bootstrap: { default: true } });


const msg = await WakuMessage.fromUtf8String(
  "Here is a message!",
  "/my-cool-app/1/my-use-case/proto"
);

let response = await waku.relay.send(msg);
console.log("message sent")
console.log(response);
