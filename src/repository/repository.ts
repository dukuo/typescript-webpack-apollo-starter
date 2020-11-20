import { HelloWorldResponse } from "@app/domain/responses/HelloWorldResponse";

export interface HelloWorldRepository {
  sayHelloTo(name: string): Promise<HelloWorldResponse>
}

export interface PubSubRepository {
  asyncIterator(triggers: string | string[]): Promise<any>
  subscribe(triggerName: string, onMessage:(...args: any[]) => void):Promise<any>
  publish(triggerName: string, payload: any): Promise<void>
}