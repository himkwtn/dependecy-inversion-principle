import { Driver } from "neo4j-driver";
import { IChannelUserRepository } from "../message.service-4";

export class Neo4jChannelUserRepository implements IChannelUserRepository {
    constructor(private driver: Driver) { }
    async findOne(userId: string, channelId: string): Promise<any> {
        const session = this.driver.session()
        const { records } = await session.run(
            `MATCH (:User {id: $userId})-[m:MEMBER]->(:Channel {id: $channelId})
            RETURN properties(m) as channelUser`,
            { userId, channelId })
        const channelUser = records[0]?.toObject()
        return channelUser
    }
}