import { Component, OnInit } from '@angular/core';
import { UserformService } from '../Service/userform.service';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private userData:UserformService) { }

  ngOnInit(): void {
    this.getlist()
  }
  allUser;
 getlist(){
   this.allUser = this.userData.getAll()
 }
}
