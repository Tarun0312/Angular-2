import { Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';
import { TestComponent } from '../../test/test.component';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

  @ContentChild("paragraph")
  paraEle! : ElementRef

  @ContentChild(TestComponent) testCompRef! : TestComponent 
  name : string = ''

  @ContentChildren("paragraph") paraElements! : QueryList<ElementRef>

  @ContentChildren(TestComponent) testComponents! : QueryList<TestComponent>

  combineName :string = ''
  ngAfterViewInit(){
    console.log(this.paraEle.nativeElement);
    
  }
  stylePara(){
    console.log(this.paraEle);
    
    this.paraEle.nativeElement.style.color='red'
    
  }

  styleAllParasUsingContentChildrenReference(){
    console.log(this.paraElements);
    this.paraElements.forEach((ele : ElementRef) => {
      ele.nativeElement.style.backgroundColor = 'yellow'
    })
  }
  fetchName(){
    console.log(this.testCompRef);
    this.name = this.testCompRef.name
  }
  getNameUsingContentChildren(){
    this.testComponents.forEach((comp:TestComponent) => {
      console.log(comp);
      this.combineName+=comp.name
    })
    
  }
}
