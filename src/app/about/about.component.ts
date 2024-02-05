import { Component } from '@angular/core';
import { product } from './product';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  
  
  allProducts: product[] =[
  
    { pImg : "../../assets/1.jpeg" ,pTitle : "Chiken", pDes : "ourDeliciesion Food", pPrice : 100},
    { pImg : "../../assets/2.jpeg" ,pTitle : "twest", pDes : "ourDeliciesion Food", pPrice : 500},
    { pImg : "../../assets/3.jpeg" ,pTitle : "Chiken", pDes : "ourDeliciesion Food", pPrice : 50},
    { pImg : "../../assets/4.jpeg" ,pTitle : "Meet", pDes : "ourDeliciesion Food", pPrice : 750},
    { pImg : "../../assets/2.jpeg" ,pTitle : "Twest", pDes : "ourDeliciesion Food", pPrice : 50},
    { pImg : "../../assets/6.jpeg" ,pTitle : "Salat", pDes : "ourDeliciesion Food", pPrice : 50},
    { pImg : "../../assets/2.jpeg" ,pTitle : "Twest", pDes : "ourDeliciesion Food", pPrice : 50},
    { pImg : "../../assets/4.jpeg" ,pTitle : "Meet", pDes : "ourDeliciesion Food", pPrice : 50}
   
   

  
  ]
}
