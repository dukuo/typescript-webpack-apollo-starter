import { HELLO_WORLD } from "@app/domain/topics/Topics";
import { PubSubUseCase } from "@app/usecase/pub-sub/PubSubUseCase";

export class SubscriptionExampleResolver {
  usecase: PubSubUseCase;
  constructor(usecase: PubSubUseCase) {
    this.usecase = usecase;
  }

  getResolvers() {
    return {
      Subscription: {
        helloWorld: {
          subscribe: async () => await this.usecase.asyncIterator([HELLO_WORLD])
        },
      },
    };
  }
}
