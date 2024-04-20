import { Component } from '@angular/core';
import { FetchdataService } from '../fetchdata.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private x1:FetchdataService) { 
  }
  ngOnInit():void {
    console.log('Fetch node js data from');
    this.x1.apiFromnodejs().subscribe();
  }

}
