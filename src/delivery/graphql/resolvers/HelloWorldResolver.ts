import { HelloWorldResponse } from "@app/domain/responses/HelloWorldResponse";
import { HelloWorldUseCase } from "@app/usecase/usecase";

export class HelloWorldResolver {
  usecase: HelloWorldUseCase;
  constructor(usecase: HelloWorldUseCase) {
    this.usecase = usecase;
  }

  getResolvers() {
    return {
      Query: {
        helloWorld: async (
          _: any,
          { input: { name } }: any
        ): Promise<HelloWorldResponse> => await this.usecase.sayHelloTo(name),
      },
    };
  }
}
