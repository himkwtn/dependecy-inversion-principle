import { IChannelUserRepository, IMessageRepository, MessageService } from "../src/message.service-4"


describe('Message Service', () => {
    const mockChannelUserRepository: IChannelUserRepository = {
        findOne: jest.fn()
    }
    const mockMessageRepository: IMessageRepository = {
        create: jest.fn().mockImplementation(async msg => msg)
    }
    const messageService = new MessageService(mockChannelUserRepository, mockMessageRepository)
    test('create message', async () => {
        /**
         * test test
         * test test
         * test test
         */
    })
})