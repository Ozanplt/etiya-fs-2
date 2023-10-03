import { Component } from '@angular/core';

@Component({
  selector: 'main-component', // ilgili component diğer htmller tarafından çağırılırken kullanılacak isim
  templateUrl: './app.component.html', //ilgili component,n bağlı olduğu html dosyası yolu
  styleUrls: ['./app.component.css'] // ilgili componentin bağlı olduğu css dosyalarının yolu
  //template: '<h3>Merhaba<h3>', // ilgili componentin render edeceği html
  //styles:['h3 {color: red}'] // ilgili componentin stilleri
})
export class AppComponent {
  title = 'etiya-fs-2';
  private title1 = 'etiya-fs-2'; // html tarafından dahil erişelemez
  students = ["Halit","Ozan","Murat","Musa","Merve","Emine"];
  name: string = '1234';
  address: string = '';
  toDoList: string[] = [];
  toDo: string = '';

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
