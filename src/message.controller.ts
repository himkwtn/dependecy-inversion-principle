import { driver } from "neo4j-driver";
import {Container} from 'typedi'
import { MessageService } from "./message.service-4";
import { IMessageService } from './message.service-5';
import { ChannelUserModel } from "./models/channel-user";
import { MessageModel } from "./models/message";
import { MongoChannelUserRepository } from "./repositories/channel-user.mongo";
import { Neo4jChannelUserRepository } from "./repositories/channel-user.neo4j";
import { MongoMessageRepository } from "./repositories/message.mongo";

const channelRepository1 = new MongoChannelUserRepository(ChannelUserModel)
const channelRepository2 = new Neo4jChannelUserRepository(driver('url'))
const messageRepository = new MongoMessageRepository(MessageModel)

// without dependency injection container
const messageService = new MessageService(channelRepository2, messageRepository)

// with dependency injection container
const messageService2 = Container.get<IMessageService>('MessageService')