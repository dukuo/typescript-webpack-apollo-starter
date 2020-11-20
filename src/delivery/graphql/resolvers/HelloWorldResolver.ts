import { HelloWorldResponse } from "@app/domain/responses/HelloWorldResponse";
import { HELLO_WORLD } from "@app/domain/topics/Topics";
import { PubSubUseCase } from "@app/usecase/pub-sub/PubSubUseCase";
import { HelloWorldUseCase } from "@app/usecase/usecase";

export class HelloWorldResolver {
  usecase: HelloWorldUseCase;
  pubsub: PubSubUseCase;
  constructor(usecase: HelloWorldUseCase, pubsub: PubSubUseCase) {
    this.usecase = usecase;
    this.pubsub = pubsub;
  }

  getResolvers() {
    return {
      Query: {
        helloWorld: async (
          _: any,
          { input: { name } }: any
        ): Promise<HelloWorldResponse> => {
          const helloToResponse = await this.usecase.sayHelloTo(name);
          this.pubsub.publish(HELLO_WORLD, {
            helloWorld: helloToResponse,
          });
          return helloToResponse;
        },
      },
    };
  }
}
