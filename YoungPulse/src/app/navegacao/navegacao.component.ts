import { Component } from '@angular/core';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.css']
})
export class NavegacaoComponent {

  divAtiva = false;

  mobileMenu(){
    this.divAtiva = !this.divAtiva;
  }
}
