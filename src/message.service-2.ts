import { Model } from "mongoose";
import { IChannelUser } from "./models/channel-user";
import { IMessage } from "./models/message";

export class MessageService {
    constructor(private channelUserModel: Model<IChannelUser>, private messageModel: Model<IMessage>) { }
    async create(text: string, userId: string, channelId: string) {
        const channelUser = await this.channelUserModel.findOne({ userId, channelId })
        if (!channelUser) {
            throw new Error('not allowed.')
        }
        const message = await this.messageModel.create({ text, userId, channelId })
        return message
    }
}