import { Model } from "mongoose";
import { Driver } from "neo4j-driver";
import { IMessage } from "./models/message";

/**
 * we want to use Neo4j to store channel-user relationships
 * need to refactor message service (and other services that use channel-user model)
 */

export class MessageService {
    constructor(private driver: Driver, private messageModel: Model<IMessage>) { }
    async create(text: string, userId: string, channelId: string) {
        const session = this.driver.session()
        const { records } = await session.run(
            `MATCH (:User {id: $userId})-[m:MEMBER]->(:Channel {id: $channelId})
            RETURN properties(m) as channelUser
            `,
            { userId, channelId })
        const channelUser = records[0]?.toObject()
        if (!channelUser) {
            throw new Error('not allowed.')
        }
        const message = await this.messageModel.create({ text, userId, channelId })
        return message
    }
}