import { Component, OnInit } from '@angular/core';


interface Componente {
 icon: string;
 name: string;
 redirecto: string;

}


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
  componentes: Componente[] =[
    {
     icon: 'football-outline',
     name: 'Action sheet',
     redirecto:'/action-sheet'

    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirecto:'/alert'
 
      
     },
     {
      icon: 'beaker-outline',
      name: 'Avatar',
      redirecto:'/avatar'
 
      
     }
  ];

     
  constructor() { }

  ngOnInit() {
  }

}
