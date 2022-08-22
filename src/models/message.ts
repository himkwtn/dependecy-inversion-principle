import { Model } from "mongoose";
export interface IMessage {
    userId: string
    channelId: string
    text: string
}
export const MessageModel: Model<IMessage> = new Proxy({}, { get: () => () => { } }) as any