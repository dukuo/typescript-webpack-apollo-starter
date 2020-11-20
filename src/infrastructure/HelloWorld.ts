import { HelloWorldResponse } from "@app/domain/responses/HelloWorldResponse";
import { HelloWorldRepository } from "@app/repository/repository";

export class HelloWorld implements HelloWorldRepository {
  sayHelloTo(name: string) {
    return Promise.resolve(
      new HelloWorldResponse(
        "SUCCESS",
        "Message sent",
        `Hello World! And hello world to you, ${name} !`
      )
    );
  }
}
