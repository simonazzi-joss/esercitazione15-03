import { Injectable } from '@angular/core';
import { MyClass } from '../models/myClass';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class MyServiceService {
  private instOfMyClass: MyClass;

  constructor() {
    this.instOfMyClass = new MyClass('String....', 23, false);
  }

  write() {
    this.instOfMyClass.boolVal = !this.instOfMyClass.boolVal;
    this.instOfMyClass.numberVal = Math.random() * 100;
    this.instOfMyClass.stringVal = `New String.... ${this.instOfMyClass.numberVal}`;
  }

  read(): Observable<MyClass> {
    return of(this.instOfMyClass);
  }
}
