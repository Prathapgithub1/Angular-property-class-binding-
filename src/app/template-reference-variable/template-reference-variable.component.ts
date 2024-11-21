import { Component } from '@angular/core';

@Component({
  selector: 'app-template-reference-variable',
  templateUrl: './template-reference-variable.component.html',
  styleUrl: './template-reference-variable.component.css'
})
export class TemplateReferenceVariableComponent {
  public name:string=''
 public buttonClick(buttonClick:any){
  this.name=buttonClick.value
 }
}
