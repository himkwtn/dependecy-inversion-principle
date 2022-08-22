import { MessageService } from "../src/message.service-1"


jest.mock('../src/models/channel-user', () => {
    // mock mock
})
jest.mock('../src/models/message', () => {
    // mock mock
})

describe('Message Service', () => {
    const messageService = new MessageService()
    test('create message', async () => {
        /**
         * test test
         * test test
         * test test
         */
    })
})