import { MessageService } from "../src/message.service-1"
import { ChannelUserModel } from "../src/models/channel-user"
import { MessageModel } from "../src/models/message"

describe('Message Service', () => {
    const userId1 = 'user-1'
    const userId2 = 'user-2'
    const channelId = 'channel-1'
    beforeEach(async () => {
        await ChannelUserModel.create({ userId: userId1, channelId })
    })
    afterEach(async () => {
        await ChannelUserModel.deleteMany({})
        await MessageModel.deleteMany({})
    })
    const messageService = new MessageService()
    test('create message', async () => {
        /**
         * test test
         * test test
         * test test
         */
    })
})