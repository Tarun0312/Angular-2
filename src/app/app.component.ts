import { Component,ViewChildren,ElementRef,QueryList } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '2angular-view-children';
 fullName : string = ''
//  <!-- View Children Decorator -->
// <!-- It is used to get reference to a list of DOM Element from view template in compoennt class.It returns all matching elements  -->
  @ViewChildren('inputRef')
  inputElements! : QueryList<ElementRef> 
  // 2nd arg is optional read,there is no static
  // In ViewChildren ,it is initialized on change detection,not on view

  ngOnInit(){
    // here inputElements is undefined not initialized on view,on change detction when click event happens it gets initalized
    // below gives error on console
    // this.inputElements.forEach((ele : ElementRef) => {
    //   console.log(ele.nativeElement.value);
    // })
  }

  showFullName(){
    let fullName = ''
    this.inputElements.forEach((ele : ElementRef) => {
      console.log(ele.nativeElement.value);
      fullName += ele.nativeElement.value + ' '
    })
    this.fullName = fullName.trim()
    
  }
}
