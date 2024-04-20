import { Component } from '@angular/core';
import { FetchdataService } from '../fetchdata.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private x1:FetchdataService) { 
  }
  //ngOnInit() is the Cycle to call the API's

  public record:any;
  ngOnInit():void {
    console.log('Fetch node js data from');
    this.x1.apiFromnodejs().subscribe((result)=>{
      console.log(result);
      this.record = result
    });
  }

}
