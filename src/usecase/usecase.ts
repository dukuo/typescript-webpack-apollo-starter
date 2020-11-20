import { HelloWorldResponse } from '@app/domain/responses/HelloWorldResponse'

export interface HelloWorldUseCase {
  sayHelloTo(name: string):Promise<HelloWorldResponse>
}