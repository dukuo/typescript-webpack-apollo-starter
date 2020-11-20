import { gql } from "apollo-server-core"
import { DocumentNode } from "graphql"

export class GraphqlTypes {
  constructor() { }

  getTypesDefs(): DocumentNode {
    return gql`
      type HelloWorldResponse {
        code: String!
        message: String!
        hello: String!
      }

      input HelloWorldInput {
        name: String!
      }
      type Query {
        helloWorld(input: HelloWorldInput!): HelloWorldResponse
      }
            `
  }
}
