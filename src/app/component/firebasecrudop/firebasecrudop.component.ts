import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-firebasecrudop',
  templateUrl: './firebasecrudop.component.html',
  styleUrls: ['./firebasecrudop.component.css']
})
export class FirebasecrudopComponent implements OnInit{
  myForm: FormGroup;
  tabledata: any[] = [];
  updateItem!: string;
updates:boolean=false;
  save: any;
  temporaryvariable!:string;


  constructor(private fb: FormBuilder ,private user:AdminService  ) {
    this.myForm = fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }
edits(){
  this.updates=!this.updates;
}

  ngOnInit(): void {

    this.getdata();

    // this.savevalues();
  }

  onSubmit() {
    // Handle form submission logic here
    console.log(this.myForm.value);
    this.user.createItem(this.myForm.value)
  }

// getdata(){
//   this.user.getItems().subscribe((res)=>{
//     console.log(res);
//     this.tabledata=res;
    
//   });

// }
getdata(){
this.user.getItems().subscribe(data => {
  console.log(data);
  this.tabledata=data;
  // 'data' is an array of objects, each containing the key and values
});
}


updatedata(item:any){
  
  this.updateItem=item;
  this.myForm.patchValue(item);
  console.log(item.key);
  this.temporaryvariable=item.key;
  
    // this.user.updateItem(item.key, this.myForm.value).then((res)=>
    //   console.log(res)
    //   );
    }
    // updateaction(key=this.updateItem.key :string){
        
    // this.user.updateItem(key, this.myForm.value).then((res)=>
    //   console.log(res)
    //   );

    // }
    savevalues(){
     

        this.user.updateItem(this.temporaryvariable, this.myForm.value).then(result =>{
          console.log(result);
          this.save=result;
        }
    
        );
        this.clearform();
        this.change();

    }
    
clearform(){
  this.myForm.reset();
}
change(){
  this.updates=!this.updates;
}


 delete(data: string) {
  this.user.deleteItem(data);



}


}

