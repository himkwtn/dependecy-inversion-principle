import { driver } from "neo4j-driver";
import { MessageService } from "./message.service-4";
import { ChannelUserModel } from "./models/channel-user";
import { MessageModel } from "./models/message";
import { MongoChannelUserRepository } from "./repositories/channel-user.mongo";
import { Neo4jChannelUserRepository } from "./repositories/channel-user.neo4j";
import { MongoMessageRepository } from "./repositories/message.mongo";

const channelRepository1 = new MongoChannelUserRepository(ChannelUserModel)
const channelRepository2 = new Neo4jChannelUserRepository(driver('url'))
const messageRepository = new MongoMessageRepository(MessageModel)

const messageService = new MessageService(channelRepository2, messageRepository)