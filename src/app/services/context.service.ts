import { Injectable } from '@angular/core';

@Injectable()
export class ContextService {
  private userId: number;
  private servicePath: string;

  constructor() {
    this.userId = 1;
    this.servicePath = 'https://jsonplaceholder.typicode.com/';
  }

  getUserId(): number {
    return this.userId;
  }

  getServicePath(): string {
    return this.servicePath;
  }
}
