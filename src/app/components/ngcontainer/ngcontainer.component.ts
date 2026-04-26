import { Component } from '@angular/core';

@Component({
  selector: 'app-ngcontainer',
  standalone: false,
  templateUrl: './ngcontainer.component.html',
  styleUrl: './ngcontainer.component.scss'
})
export class NgcontainerComponent {

  toggle : boolean = false
  updateToggle(){
    this.toggle = !this.toggle
  }
}
