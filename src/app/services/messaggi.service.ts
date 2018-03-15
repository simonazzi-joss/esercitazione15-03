import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class MessaggiService {
  private messaggi: string[];

  constructor() {
    this.messaggi = ['Array messaggi creato'];
  }

  addMessage(msg) {
    this.messaggi.push(msg);
  }

  getMessaggi(): Observable<string[]> {
    return of(this.messaggi);
  }

  clear() {
    this.messaggi = [];
  }
}
