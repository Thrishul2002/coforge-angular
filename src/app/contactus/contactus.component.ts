import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {

  pname:string='';
  pemail:string='';
  pmessage:string='';
  submittedData:any=null;

  constructor(private router:Router){}

  onSubmit(){
    this.submittedData={
      name:this.pname,
      email:this.pemail,
      message:this.pmessage,
    };
    //after 10 seconds navigate to details component
    setTimeout(()=>{
      this.router.navigate(['/det'],{
        state:{data:this.submittedData},
      });
    },3000);
  }
}
