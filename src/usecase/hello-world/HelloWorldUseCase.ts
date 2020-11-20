import { HelloWorldRepository } from '@app/repository/repository'
import { HelloWorldUseCase as HelloWorldUseCaseI } from '@app/usecase/usecase'
export class HelloWorldUseCase implements HelloWorldUseCaseI {
  repository: HelloWorldRepository
  constructor(repository: HelloWorldRepository) {
    this.repository = repository
  }
  async sayHelloTo(name: string) {
    return await this.repository.sayHelloTo(name);
  }
}