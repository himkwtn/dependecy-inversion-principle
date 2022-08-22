import { MessageService } from "../src/message.service-2"


describe('Message Service', () => {
    const mockChannelUserModel: any = {
        findOne: jest.fn()
    }
    const mockMessage: any = {
        create: jest.fn().mockImplementation(async msg => msg)
    }
    const messageService = new MessageService(mockChannelUserModel, mockMessage)
    test('create message', async () => {
        /**
         * test test
         * test test
         * test test
         */
        expect(mockChannelUserModel.findOne).toBeCalled()
    })
})