import { Model } from "mongoose";

export interface IChannelUser {
    channelId: string
    userId: string
}
export const ChannelUserModel: Model<IChannelUser> = new Proxy({}, { get: () => () => '' }) as any