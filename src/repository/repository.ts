import { HelloWorldResponse } from "@app/domain/responses/HelloWorldResponse";

export interface HelloWorldRepository {
  sayHelloTo(name: string): Promise<HelloWorldResponse>
}
