import { Component } from '@angular/core';

@Component({
  selector: 'app-real-agenda',
  templateUrl: './real-agenda.component.html',
  styleUrls: ['./real-agenda.component.scss']
})
export class RealAgendaComponent {
  realAgendaItems = [
    'What are CORS and SSL/TLS and why do we need them',
    'A basic client-server pair',
    'Dumb CORS fix',
    'Proper CORS fix',
    'Dumb TLS fix',
    'Proper TLS fix',
    'Bonus: Make it easier with NixOS'
  ];

  customStyles: { [key: number]: string } = {
    6: 'linear-gradient(145deg, #5277C3, #7EBAE4)' // NixOS colors
  };
}
