import { makeExecutableSchema, PubSub } from "apollo-server";
import { mergeResolvers } from "graphql-tools";
import { HelloWorldResolver } from "./delivery/graphql/resolvers/HelloWorldResolver";
import { SubscriptionExampleResolver } from "./delivery/graphql/resolvers/SubscriptionExampleResolver";
import { GraphqlServer } from "./delivery/graphql/server";
import { GraphqlTypes } from "./delivery/graphql/types/Types";
import { HelloWorld } from "./infrastructure/HelloWorld";
import { EventEmitterPubSub } from "./infrastructure/node/EventEmitterPubSub";
import { HelloWorldUseCase } from "./usecase/hello-world/HelloWorldUseCase";
import { PubSubUseCase } from "./usecase/pub-sub/PubSubUseCase";

const pubSubRepository = new EventEmitterPubSub(new PubSub());
const pubSubUseCase = new PubSubUseCase(pubSubRepository);
const helloWorldSubscriptionResolver = new SubscriptionExampleResolver(pubSubUseCase);

const helloWorldRepository = new HelloWorld();
const helloWorldUsecase = new HelloWorldUseCase(helloWorldRepository);
const helloWorldResolver = new HelloWorldResolver(helloWorldUsecase, pubSubUseCase);

const types = new GraphqlTypes()
const schema = makeExecutableSchema({
  typeDefs: types.getTypesDefs(),
  resolvers: mergeResolvers([
    helloWorldResolver.getResolvers(),
    helloWorldSubscriptionResolver.getResolvers()
  ])
})
const graphqlServer = new GraphqlServer({
  schema
})

graphqlServer.getServer().listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
})