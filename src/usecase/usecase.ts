import { HelloWorldResponse } from '@app/domain/responses/HelloWorldResponse'

export interface HelloWorldUseCase {
  sayHelloTo(name: string):Promise<HelloWorldResponse>
}

export interface PubSubUseCase {
  asyncIterator(triggers: string | string[]):Promise<any>
  subscribe(triggerName: string, onMessage: (...args: any[]) => void): Promise<number>
  publish(triggerName: string, payload: any): Promise<void>
}