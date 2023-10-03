import { Component } from '@angular/core';

@Component({
  templateUrl: './first-workshop.component.html',
  styleUrls: ['./first-workshop.component.css']
})
export class FirstWorkshopComponent {
  title = 'etiya-fs-2';
  private title1 = 'etiya-fs-2'; // html tarafından dahil erişelemez
  students = ["Halit","Ozan","Murat","Musa","Merve","Emine"];
  name: string = '1234';
  address: string = '';
  toDoList: string[] = [];
  toDo: string = '';
  cartItems: number = 0;

  increase(){
    this.cartItems++;
  }

  addToDo(){
    this.toDoList.push(this.toDo);
    this.toDo ='';
  }

  removeFromList(toDo:string){
    this.toDoList = this.toDoList.filter((value) => value != toDo);
  }

  changeName(event: any){
    let newValue = event.target.value;
    this.name = newValue;
  }

  changeNameBtn(){
    this.name = 'Butondan değiştirildi';
    this.address = 'Ankara';
  }

  //To-Do listesi değişkeni
  //to-do string değişkeni (two-way daata binding)
  // add fonksiyonu todo stringini listeye eklemeli
  //to-do stringi boş stringe eşitlemeli
}
