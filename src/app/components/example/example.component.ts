import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  @Input() // =>  Bu componenti çağıran componentlerden gönderilecek
  title:string= 'Ürün Başlığı';

  @Output()
  onBtnPress = new EventEmitter();


}
