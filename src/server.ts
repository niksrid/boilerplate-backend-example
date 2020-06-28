import { GraphQLServer, Options } from 'graphql-yoga'
import { schema } from './schema'
import { createContext } from './context'

new GraphQLServer({ schema, context: createContext }).start( () =>{
  console.log(
    `Pokemon being served at: http://localhost:4000\n⭐️`,
  )
}
)
