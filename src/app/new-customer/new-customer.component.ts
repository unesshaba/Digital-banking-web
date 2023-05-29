import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../model/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent {
handleSaveCustomer() {
let customer:Customer=this.newCustomerFormGroup.value;
this.customerService.saveCustomers(customer).subscribe({
  next : data=>{
    alert("Customer has been successfully saved!");
    // this.newCustomerFormGroup.reset();
     this.router.navigateByUrl("/customers");
  },
  error : err => {
    console.log(err);
  }
});;
  
}
  newCustomerFormGroup! : FormGroup;
  constructor(private fb:FormBuilder,private customerService:CustomerService,private router:Router ){ }

  ngOnInit(): void {
    this.newCustomerFormGroup=this.fb.group({
      name : this.fb.control(null, [Validators.required, Validators.minLength(4)]),
      email : this.fb.control(null,[Validators.required, Validators.email])
    });
  }

}
