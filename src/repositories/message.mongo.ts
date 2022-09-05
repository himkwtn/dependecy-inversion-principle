import { Model } from "mongoose";
import { Service } from 'typedi'
import { IMessageRepository } from "../message.service-4";
import { IMessage } from "../models/message";

@Service('MessageRepository')
export class MongoMessageRepository implements IMessageRepository {
    constructor(private model: Model<IMessage>) { }
    create(msg: { text: string; userId: string; channelId: string; }): Promise<any> {
        return this.model.create(msg)
    }

}