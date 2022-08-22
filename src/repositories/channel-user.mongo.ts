import { Model } from "mongoose";
import { IChannelUserRepository } from "../message.service-4";
import { IChannelUser } from "../models/channel-user";

export class MongoChannelUserRepository implements IChannelUserRepository {
    constructor(private model: Model<IChannelUser>) { }
    findOne(userId: string, channelId: string): Promise<any> {
        return this.model.findOne({ userId, channelId }).lean().exec()
    }
}