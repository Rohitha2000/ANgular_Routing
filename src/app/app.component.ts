import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Routing';
  num=0;
  factorialnum=0;

  i:number;

  constructor(private router: Router){}
  onSubmit(formdata: any){
     this.num= formdata.number1;
     let fact=1;
      
  //    while (this.num >= 1) { 
  //     this.fact = this.fact * this.num; 
  //     this.num--; 
  //  } 
   for(this.i=1; this.i<= this.num; this.i++){
       fact= fact * this.i;
   }
   this.factorialnum= fact;

  // this.router.navigate(['shop']);
    
  }
}
