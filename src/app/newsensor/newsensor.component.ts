import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsensorserviceService } from '../servicesapi/newsensorservice.service';

@Component({
  selector: 'app-newsensor',
  templateUrl: './newsensor.component.html',
  styleUrls: ['./newsensor.component.scss']
})
export class NewsensorComponent implements OnInit {
  submitted: boolean;
  formControls = this.newesensorservice.form.controls;
  constructor(private newesensorservice: NewsensorserviceService,private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.submitted = true;
    // if(this.customerService.form.get("$key").value ==null) {
    // }
    if(this.newesensorservice.form.valid){
      this.submitted = false;
      this.router.navigateByUrl('/');
      this.newesensorservice.form.reset();
      console.log(this.newesensorservice.form)
      // this.formControls.reset();
      // Object.keys(this.customerService.form.controls).forEach(key => {
      //   this.customerService.form.controls[key].setErrors(null)
      // });
    }
  }

}
