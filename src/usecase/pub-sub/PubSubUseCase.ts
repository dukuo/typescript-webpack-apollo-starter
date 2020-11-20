import { PubSubRepository } from '@app/repository/repository';
import { PubSubUseCase as PubSubUseCaseI } from '@app/usecase/usecase'

export class PubSubUseCase implements PubSubUseCaseI {
  repository: PubSubRepository
  constructor(repository: PubSubRepository) {
    this.repository = repository
  }

  async asyncIterator(triggers: string | string[]) {
    return await this.repository.asyncIterator(triggers);
  }

  async subscribe(triggerName: string, onMessage: (...args: any[]) => void) {
    return await this.repository.subscribe(triggerName, onMessage);
  }

  async publish(triggerName: string, payload: any) {
    return await this.repository.publish(triggerName, payload);
  }
}