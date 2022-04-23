import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { User } from "../../interfaces/User";

@Component({
  selector:"app-new-contact",
  templateUrl:'./new-contact.component.html',
  styleUrls:['./new-contact.component.scss']
})

export class NewContact{
  avatars = [
    "Antonette","Bret","Delphine","Elwyn.Skiles","Kamren","Karianne","Leopoldo_Corkery","Maxime_Nienow","Moriah.Stanton","Samantha"
  ]
  user : User = {
    id:1,
    name:"",
    username:"",
    email:"",
    address:{
      street:"",
      suite:"",
      city :'',
      zipcode :''
    }
  };

  constructor(private matdialog : MatDialogRef<NewContact>){}

  save(){
    this.matdialog.close(this.user);
  }
  dismiss(){
    this.matdialog.close(null)
  }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
