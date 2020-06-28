import { PrismaClient } from '@prisma/client'
import { PubSub } from 'graphql-yoga'
import { Context } from './types';

const prisma = new PrismaClient()
const pubsub = new PubSub()

export function createContext(ctx: any): Context {
  return { ...ctx, prisma, pubsub }
}
