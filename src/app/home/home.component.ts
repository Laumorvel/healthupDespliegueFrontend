import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fontSize = 20;
  dislexia = false;


  dislexiaFriendly(){
    if(!this.dislexia){
      document.getElementsByTagName('h2')[0].style.fontFamily  = `OpenDyslexic3Regular`;
      document.getElementsByTagName('h2')[1].style.fontFamily  = `OpenDyslexic3Regular`;
      document.getElementsByTagName('strong')[0].style.fontFamily  = `OpenDyslexic3Regular`;
      document.getElementsByTagName('strong')[1].style.fontFamily  = `OpenDyslexic3Regular`;
      this.dislexia = true;
    }else{
      document.getElementsByTagName('h2')[0].style.fontFamily  = `Quicksand, sans-serif`;
      document.getElementsByTagName('h2')[1].style.fontFamily  = `Quicksand, sans-serif`;
      document.getElementsByTagName('strong')[0].style.fontFamily  = `Quicksand, sans-serif`;
      document.getElementsByTagName('strong')[1].style.fontFamily  = `Quicksand, sans-serif`;
      this.dislexia = false;
    }
  }

  changeFont(operator:any){
    operator === '+' ? this.fontSize++ : this.fontSize--;
    document.getElementsByTagName('h2')[0].style.fontSize  = `${this.fontSize}px`;
    document.getElementsByTagName('h2')[1].style.fontSize  = `${this.fontSize}px`;
  }
}
