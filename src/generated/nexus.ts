/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */

import * as ctx from "../types"



declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  IntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: number | null; // Int
    notIn?: number[] | null; // [Int!]
  }
  StringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: string | null; // String
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  pokemonCreateInput: { // input type
    name: string; // String!
    pokedex: number; // Int!
    type: string; // String!
  }
  pokemonOrderByInput: { // input type
    id?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
    name?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
    pokedex?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
    type?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
  }
  pokemonUpdateInput: { // input type
    id?: number | null; // Int
    name?: string | null; // String
    pokedex?: number | null; // Int
    type?: string | null; // String
  }
  pokemonUpdateManyMutationInput: { // input type
    id?: number | null; // Int
    name?: string | null; // String
    pokedex?: number | null; // Int
    type?: string | null; // String
  }
  pokemonWhereInput: { // input type
    AND?: NexusGenInputs['pokemonWhereInput'][] | null; // [pokemonWhereInput!]
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    NOT?: NexusGenInputs['pokemonWhereInput'][] | null; // [pokemonWhereInput!]
    OR?: NexusGenInputs['pokemonWhereInput'][] | null; // [pokemonWhereInput!]
    pokedex?: NexusGenInputs['IntFilter'] | null; // IntFilter
    type?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  pokemonWhereUniqueInput: { // input type
    id?: number | null; // Int
    name?: string | null; // String
    pokedex?: number | null; // Int
  }
}

export interface NexusGenEnums {
  OrderByArg: "asc" | "desc"
}

export interface NexusGenRootTypes {
  BatchPayload: { // root type
    count: number; // Int!
  }
  Mutation: {};
  Query: {};
  Subscription: {};
  pokemon: { // root type
    id: number; // Int!
    name: string; // String!
    pokedex: number; // Int!
    type: string; // String!
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  IntFilter: NexusGenInputs['IntFilter'];
  StringFilter: NexusGenInputs['StringFilter'];
  pokemonCreateInput: NexusGenInputs['pokemonCreateInput'];
  pokemonOrderByInput: NexusGenInputs['pokemonOrderByInput'];
  pokemonUpdateInput: NexusGenInputs['pokemonUpdateInput'];
  pokemonUpdateManyMutationInput: NexusGenInputs['pokemonUpdateManyMutationInput'];
  pokemonWhereInput: NexusGenInputs['pokemonWhereInput'];
  pokemonWhereUniqueInput: NexusGenInputs['pokemonWhereUniqueInput'];
  OrderByArg: NexusGenEnums['OrderByArg'];
}

export interface NexusGenFieldTypes {
  BatchPayload: { // field return type
    count: number; // Int!
  }
  Mutation: { // field return type
    createPokemon: NexusGenRootTypes['pokemon']; // pokemon!
    deleteMany: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    deleteOnepokemon: NexusGenRootTypes['pokemon'] | null; // pokemon
    updateMany: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    updateOnepokemon: NexusGenRootTypes['pokemon'] | null; // pokemon
    upsertOnepokemon: NexusGenRootTypes['pokemon']; // pokemon!
  }
  Query: { // field return type
    pokemon: NexusGenRootTypes['pokemon'][]; // [pokemon!]!
  }
  Subscription: { // field return type
    newPokemon: NexusGenRootTypes['pokemon']; // pokemon!
  }
  pokemon: { // field return type
    id: number; // Int!
    name: string; // String!
    pokedex: number; // Int!
    type: string; // String!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createPokemon: { // args
      data: NexusGenInputs['pokemonCreateInput']; // pokemonCreateInput!
    }
    deleteMany: { // args
      where?: NexusGenInputs['pokemonWhereInput'] | null; // pokemonWhereInput
    }
    deleteOnepokemon: { // args
      where: NexusGenInputs['pokemonWhereUniqueInput']; // pokemonWhereUniqueInput!
    }
    updateMany: { // args
      data: NexusGenInputs['pokemonUpdateManyMutationInput']; // pokemonUpdateManyMutationInput!
      where?: NexusGenInputs['pokemonWhereInput'] | null; // pokemonWhereInput
    }
    updateOnepokemon: { // args
      data: NexusGenInputs['pokemonUpdateInput']; // pokemonUpdateInput!
      where: NexusGenInputs['pokemonWhereUniqueInput']; // pokemonWhereUniqueInput!
    }
    upsertOnepokemon: { // args
      create: NexusGenInputs['pokemonCreateInput']; // pokemonCreateInput!
      update: NexusGenInputs['pokemonUpdateInput']; // pokemonUpdateInput!
      where: NexusGenInputs['pokemonWhereUniqueInput']; // pokemonWhereUniqueInput!
    }
  }
  Query: {
    pokemon: { // args
      cursor?: NexusGenInputs['pokemonWhereUniqueInput'] | null; // pokemonWhereUniqueInput
      orderBy?: NexusGenInputs['pokemonOrderByInput'] | null; // pokemonOrderByInput
      skip?: number | null; // Int
      take?: number | null; // Int
      where?: NexusGenInputs['pokemonWhereInput'] | null; // pokemonWhereInput
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "BatchPayload" | "Mutation" | "Query" | "Subscription" | "pokemon";

export type NexusGenInputNames = "IntFilter" | "StringFilter" | "pokemonCreateInput" | "pokemonOrderByInput" | "pokemonUpdateInput" | "pokemonUpdateManyMutationInput" | "pokemonWhereInput" | "pokemonWhereUniqueInput";

export type NexusGenEnumNames = "OrderByArg";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: ctx.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}