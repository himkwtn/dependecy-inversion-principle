import { Inject, Service } from 'typedi'
export interface IChannelUserRepository {
    findOne(userId: string, channelId: string): Promise<any>
}

export interface IMessageRepository {
    create(msg: { text: string, userId: string, channelId: string }): Promise<any>
}

export interface IMessageService {
    create(text: string, userId: string, channelId: string): Promise<any>
}

@Service('MessageService')
export class MessageService implements IMessageService {
    constructor(
        @Inject('ChannelUserRepository')
        private channelUserRepository: IChannelUserRepository,
        @Inject('MessageRepository')
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