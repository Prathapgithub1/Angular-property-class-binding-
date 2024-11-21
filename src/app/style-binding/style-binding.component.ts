import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrl: './style-binding.component.css'
})
export class StyleBindingComponent {
  public headerStyle = { 'background-color': 'yellow', 'color': 'black', 'font-size': '70px' }
  public ternar=false
}
