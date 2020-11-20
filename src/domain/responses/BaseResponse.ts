export class BaseResponse {
  code: String;
  message: string;
  constructor(code: string, message: string) {
    this.code = code;
    this.message = message;
  }
}
