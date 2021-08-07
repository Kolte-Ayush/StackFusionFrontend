import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '../../../node_modules/@angular/router';
import { UserformService } from '../Service/userform.service';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-user-from',
  templateUrl: './user-from.component.html',
  styleUrls: ['./user-from.component.css']
})
export class UserFromComponent implements OnInit {
  profileForm;
  loading:boolean = false;
  userdetails = {
  "name" : "",
  "email": "",
  "date": "",
  "phone_number":"" 
  }
  
  submitted = false
  constructor( private Route: ActivatedRoute, private UserService: UserformService, 
    private router: Router,private fb:FormBuilder,private _router:Router) {}

  ngOnInit(): void {
    this.formInit()
  }
  formInit(){
    this.profileForm = this.fb.group({
      name:["",this.validators(/^[a-zA-Z\s]{3,17}$/)],
      email:["",this.validators(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)],
      date:["",Validators.required],
      phone_number:["",Validators.required]
    })
  }
  validators(pattern){
    return [Validators.required,Validators.pattern(pattern)]
  }

  submit(){
  console.log(this.profileForm.value);
  this.userData(this.profileForm.value)
  this.profileForm.reset()
  }
  errorObj
  userData(data){
    this.loading = true;
    this.UserService.create(data).subscribe(res=>{
      console.log(res);
      this._router.navigate(['user-list'])
    },(error)=>{
      this.errorObj= error.error['phone_number'][0]
      this._router.navigate(['user-form'])
      this.loading =false;
    }) 
  }
get name(){
  return this.profileForm.get("name");
}

get date(){
  return this.profileForm.get("date");
}
}


