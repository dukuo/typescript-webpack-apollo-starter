import { makeExecutableSchema } from "apollo-server";
import { mergeResolvers } from "graphql-tools";
import { HelloWorldResolver } from "./delivery/graphql/resolvers/HelloWorldResolver";
import { GraphqlServer } from "./delivery/graphql/server";
import { GraphqlTypes } from "./delivery/graphql/types/Types";
import { HelloWorld } from "./infrastructure/HelloWorld";
import { HelloWorldUseCase } from "./usecase/hello-world/HelloWorldUseCase";

const helloWorldRepository = new HelloWorld();
const helloWorldUsecase = new HelloWorldUseCase(helloWorldRepository);
const helloWorldResolver = new HelloWorldResolver(helloWorldUsecase);

const types = new GraphqlTypes()
const schema = makeExecutableSchema({
  typeDefs: types.getTypesDefs(),
  resolvers: mergeResolvers([
    helloWorldResolver.getResolvers()
  ])
})
const graphqlServer = new GraphqlServer({
  schema
})

graphqlServer.getServer().listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
})