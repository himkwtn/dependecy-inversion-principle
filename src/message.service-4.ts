export interface IChannelUserRepository {
    findOne(userId: string, channelId: string): Promise<any>
}

export interface IMessageRepository {
    create(msg: { text: string, userId: string, channelId: string }): Promise<any>
}

export class MessageService {

    // @Inject('<token1>')
    // private channelUserRepository: IChannelUserRepository

    // @Inject('<token2>')
    // private messageRepository: IMessageRepository
    constructor(
        private channelUserRepository: IChannelUserRepository,
        private messageRepository: IMessageRepository
    ) { }

    async create(text: string, userId: string, channelId: string) {
        const channelUser = await this.channelUserRepository.findOne(userId, channelId)
        if (!channelUser) {
            throw new Error('not allowed.')
        }
        const message = await this.messageRepository.create({ text, userId, channelId })
        return message
    }
}