import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent {

  formData:any;

  ngOnInit(){
    this.formData=new FormGroup({
      emailid: new FormControl("3shul@gmail.com"),
      passwd: new FormControl("1234")
    });
  }
  onClickSubmit(data:any){
    this.formData.emailid=data.emailid;
    alert("hello "+this.formData.emailid);
  }
}
