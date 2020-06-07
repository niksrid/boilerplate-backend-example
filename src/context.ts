import { PrismaClient } from '@prisma/client'
import { PubSub } from 'graphql-yoga'
const prisma = new PrismaClient()
const pubsub = new PubSub()
export interface Context {
  pubsub: PubSub,
  prisma: PrismaClient
}

export function createContext(): Context {
  return { prisma, pubsub }
}
