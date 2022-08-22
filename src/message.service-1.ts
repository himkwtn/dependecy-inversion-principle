import { ChannelUserModel } from "./models/channel-user";
import { MessageModel } from "./models/message";
/**
 * user create message
 * - check user in that channel
 * - then create message 
 */

export class MessageService {
    async create(text: string, userId: string, channelId: string) {
        const channelUser = await ChannelUserModel.findOne({ userId, channelId })
        if (!channelUser) {
            throw new Error('not allowed.')
        }
        const message = await MessageModel.create({ text, userId, channelId })
        return message
    }
}