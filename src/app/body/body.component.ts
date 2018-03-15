import { Component, OnInit, Input, Output } from '@angular/core';
import { MessaggiService } from '../services/messaggi.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  private msgs: string[];

  constructor(private messaggi: MessaggiService) { }

  ngOnInit() {
    this.messaggi.addMessage('Body inizializzato');
    this.messaggi.getMessaggi().subscribe((msgs) => {
      this.msgs = msgs;
    });
  }
}
