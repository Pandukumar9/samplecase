import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  studentForm = new FormGroup({
    studentname: new FormControl('',Validators.required),
    emailid: new FormControl(''),
    mobile: new FormControl(''),
    branch: new FormControl(''),
    isstudent: new FormControl(''),
    College: new FormControl(''),
    passout: new FormControl(''),
    pic: new FormControl(''),
    city: new FormControl('1'),
  });
  
  
}
