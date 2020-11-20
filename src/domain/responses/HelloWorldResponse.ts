import { BaseResponse } from "./BaseResponse";

export class HelloWorldResponse extends BaseResponse {
  hello: string;

  constructor(code: string, message: string, hello: string) {
    super(code, message);
    this.hello = hello;
  }
}
