import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource, } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  validationForm:any ;
  displayedColumns: any;
  dataSource:any;
  count: any=0;
  savedData: any=[];
  submitted: boolean =false;
  constructor(public fb:FormBuilder)
  {
    
  }

  ngOnInit()
  {
    this.initForm();
   this.displayedColumns = ['position', 'name', 'email', 'phone_no','gender'];

  }

  initForm()
  {
    this.validationForm=this.fb.group({
      'name':['',Validators.required],
      'email':['',[Validators.email,Validators.required]],
      'phone_no':['',Validators.required],
      'gender':['',Validators.required]
    })
  }

  showTable()
  {
    if(this.validationForm.valid)
    {
      this.submitted=true;
     this.count++;
      let data={
        'position':this.count,
        'name':this.validationForm.controls['name'].value,
        'email':this.validationForm.controls['email'].value,
        'phone_no':this.validationForm.controls['phone_no'].value,
        'gender':this.validationForm.controls['gender'].value
        
      }
      console.log(data);
      this.savedData.push(data);
      this.dataSource=new MatTableDataSource(this.savedData);
    }
  }

  AlphabetOnly(event:any){
    let pattAlpha = /^([a-zA-Z ])*$/;
    let resultAlpha = pattAlpha.test(event.key);
    return resultAlpha;
     }
  
     NumberOnly(event:any){
      let pattAlpha = /^([0-9])*$/;
      let resultAlpha = pattAlpha.test(event.key);
      return resultAlpha;
       }
}
