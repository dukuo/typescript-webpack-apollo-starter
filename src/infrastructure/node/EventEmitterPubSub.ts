import { PubSubRepository } from "@app/repository/repository";
import { PubSub } from "apollo-server";

export class EventEmitterPubSub implements PubSubRepository {
  pubsub: PubSub;
  constructor(pubsub: PubSub) {
    this.pubsub = pubsub;
  }

  async asyncIterator(triggers: string | string[]) {
    return Promise.resolve(this.pubsub.asyncIterator(triggers));
  }

  async subscribe(triggerName: string, onMessage: (...args: any[]) => void) {
    return Promise.resolve(this.pubsub.subscribe(triggerName, onMessage));
  }

  async publish(triggerName: string, payload: any) {
    return Promise.resolve(this.pubsub.publish(triggerName, payload));
  }
}
