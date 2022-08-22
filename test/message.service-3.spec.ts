import { MessageService } from "../src/message.service-3"


describe('Message Service', () => {
    const mockDriver: any = {
        session: () => ({ run: jest.fn() })
    }
    const mockMessage: any = {
        create: jest.fn().mockImplementation(async msg => msg)
    }
    const messageService = new MessageService(mockDriver, mockMessage)
    test('create message', async () => {
        /**
         * test test
         * test test
         * test test
         */
    })
})