import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { User } from "../../interfaces/User";
import { UserService } from "../../services/user.service";

@Component({
  selector:"app-new-contact",
  templateUrl:'./new-contact.component.html',
  styleUrls:['./new-contact.component.scss']
})

export class NewContact{
  avatars = [
    "Antonette"
    ,"Bret"
    ,"Delphine"
    ,"Elwyn.Skiles"
    ,"Kamren"
    ,"Karianne"
    ,"Leopoldo_Corkery"
    ,"Maxime_Nienow"
    ,"Moriah.Stanton"
    ,"Samantha"
  ]
  user : User = {
    id:11,
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
  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  suite = new FormControl('', [Validators.required]);
  city = new FormControl('', [Validators.required]);
  street = new FormControl('', [Validators.required]);
  zipcode = new FormControl('', [Validators.required]);
  avatar = new FormControl('', [Validators.required]);

  constructor(private matdialog : MatDialogRef<NewContact>, private userService: UserService){}

  save(){
    this.user.name = this.name.value
    this.user.email = this.email.value
    this.user.username = this.avatar.value
    this.user.address.street = this.street.value
    this.user.address.suite = this.suite.value
    this.user.address.city = this.city.value
    this.user.address.zipcode = this.zipcode.value

    this.userService.saveUser(this.user);
    console.log(this.user);

    this.matdialog.close(this.user);
  }
  dismiss(){
    this.matdialog.close(null)
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


  getNameErrorMessage() {
     return this.name.hasError('require') ? 'enter valid name' : '';
  }
  getStreetErrorMessage() {
    return this.name.hasError('require') ? 'enter valid street' : '';
 }
 getSuiteErrorMessage() {
  return this.name.hasError('require') ? 'enter valid suite' : '';
}
getCityErrorMessage() {
  return this.name.hasError('require') ? 'enter valid city' : '';
}
getZipcodeErrorMessage() {
  return this.name.hasError('require') ? 'enter valid zipcode' : '';
}
getAvatarErrorMessage() {
  return this.name.hasError('require') ? 'please select avatar image' : '';
}
}
