import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationService, PrimeNGConfig } from 'primeng/api';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.scss']
})
export class PatientRegistrationComponent implements OnInit {

  constructor(private confirmationService: ConfirmationService, private primengConfig: PrimeNGConfig,
    private userService: UserService,
     private toastService: ToastrService) { }

  emptyCart: boolean = true;;
  userId: number;

  statesList: string[] = ['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh',
  'Jammu and Kashmir','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland'
  ,'Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttarakhand','Uttar Pradesh','West Bengal','Andaman and Nicobar Islands'
  ,'Chandigarh','Dadra and Nagar Haveli','Daman and Diu','Delhi','Lakshadweep','Puducherry'];

  symptoms: string[] = ['Fever/ Chills','Headaches','Fatigue/Malaise/Generalized weakness','Skin Problem',
  'Unexplained change in weight',
  'Eyesight problems','Tooth ache',
   ];

  patientForm = new FormGroup({
    name: new FormControl('',Validators.required),
    gender: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    address: new FormGroup({
      address1: new FormControl('',Validators.required),
      street: new FormControl('',Validators.required),
      city: new FormControl('',Validators.required),
      state: new FormControl('',Validators.required),
      zip: new FormControl('',[Validators.required,Validators.pattern("^[0-9]{6}")])
    }),
    phoneNumber: new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    email: new FormControl('',[Validators.required,Validators.email]),
    symptoms: new FormControl('', Validators.required)
  });

  get form(){
    return this.patientForm.controls;
  }

  get address(){
    return (this.patientForm.get('address') as FormGroup).controls;
  }

  ngOnInit(): void {
  }

  placeOrder() {
    
  }

}
