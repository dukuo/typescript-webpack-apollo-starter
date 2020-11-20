import { ApolloServer, Config } from 'apollo-server'

export class GraphqlServer {
    server: ApolloServer

    constructor(config: Config) {
        this.server = new ApolloServer(config)
    }

    public getServer(): ApolloServer {
        return this.server
    }
}

