import { Component, OnInit, Output } from '@angular/core';
import { ComunicatorService } from '../services/comunicator.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  nome: string;
  cognome: string;
  email: string;

  constructor(private com: ComunicatorService) { }

  ngOnInit() {
  }

  submit() {
//  creo l'oggetto da inviare al server
    const user = {
      name: this.nome,
      surname: this.cognome,
      email: this.email
    };

//  chiamo il metodo per inviare l'oggetto
    this.com.sendNewUser(user).subscribe((x) => {
      console.log(x);
    });
  }
}
