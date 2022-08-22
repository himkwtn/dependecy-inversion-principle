import { Model } from "mongoose";
import { IMessageRepository } from "../message.service-4";
import { IMessage } from "../models/message";

export class MongoMessageRepository implements IMessageRepository {
    constructor(private model: Model<IMessage>) { }
    create(msg: { text: string; userId: string; channelId: string; }): Promise<any> {
        return this.model.create(msg)
    }

}