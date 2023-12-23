import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Route, Router } from '@angular/router';
import { EnrollnewstaffService } from 'src/app/services/enrollnewstaff.service';

// export class product {
//   key:any;
//   Name!:string;
//   Price!:string;
//     imgUrl!: string;
//   OriginalPrice!:string;
//     Offer!:string;
//     Stock!:string;
  

  
// }


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
key:any="";
  Name:string="";
Price:string="";
  imgUrl: string = "";
OriginalPrice:string="";
  Offer:string="";
  Stock:string="";
  tabledata: any[]=[];
  updates!: string;
  temp!: string;
  saved: any;
  searchTerm: any;
  showadd:boolean=true;
  showError: string='';
  showError1: string='';
  showError2: string='';
  showError3: string='';
  showError4: string='';
  showError5: string='';
  showError6: string='';

  constructor(public router: Router, private title: Title, private formBuilder: FormBuilder,private db: AngularFireDatabase, private newstaff: EnrollnewstaffService,) { }


  // products: product = new product()

  // ProductList: product[] = [];

  createProductForm!: FormGroup;

  ngOnInit(): void {
this.get();
    if (!localStorage.getItem('p')) {
      this.router.navigateByUrl('staffdashboard');

    }

    
  this.createProductForm = this.formBuilder.group({
    Name: ['',[Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    Price: ['',[Validators.required, Validators.pattern('^[0-9]*$')]],
    imgUrl: ['', [Validators.required,]],
    OriginalPrice: ["",[Validators.required, Validators.pattern('^[0-9]*$')]],
  Offer: ["",[Validators.required, ]],
  Stock: ["",[Validators.required, Validators.pattern('^[0-9]*$')]],

  });
  }

 

  onSubmit() {
    this.validation();
  }
  validation(){
    if (this.imgUrl=== "") {
      this.showError1 = "*Image URL is required";
    }else
    if(this.Name===""){
      this.showError2 = "Product name is required";
    
    }else if(this.Price===""){
      this.showError3 = "Price value is required.";
    
    }else

if(this.OriginalPrice===""){
  this.showError4 = "Price value is required.";
}
else
if(this.Offer===""){
  this.showError5 = "Price value is required.";

}
else
if(this.Stock===""){
  this.showError6 = "Stock value is required.";
}
else
if(this.imgUrl && this.Name && this.Price && this.OriginalPrice && this.Offer && this.Stock) {
    this.create();
    this.showadd=true;
    this.clearform();
}
  }

  create(){
    console.log(this.createProductForm.value);
    this.newstaff.createproduct(this.createProductForm.value);
  }


  get(){
    this.newstaff.getproduct().subscribe(data => {
      console.log(data);
      this.tabledata=data;

      // console.log(this.lastSID);

    });
    }

  logout()
  {
    localStorage.removeItem('p');
    this.router.navigateByUrl('staffdashboard');
  }

  Analysis(){ 
this.router.navigateByUrl('\staffanalysis')
  }

  update(data:any){
    this.updates=data.key;
  this.createProductForm.patchValue(data);

console.log(data.key)  ;
this.temp=  data.key;
  }
  save(){
    this.newstaff.updateproduct(this.temp, this.createProductForm.value).then(result =>{
      console.log(result);
      this.saved=result;
    }

  );
  this.clearform();

}
              
clearform(){
  this.createProductForm.reset();
}

  delete(data:string){
    this.newstaff.deleteproduct(data);
  }

  searchEmployees() {
    // this.searchTerm=this.searchTerm.toLowerCase();
    
          if (this.searchTerm.trim() === '') {
            this.get();
          } else if (this.searchTerm.trim()!==''){
            this.tabledata=this.tabledata.filter(product =>
                Object.values(product).some(value =>
                  String(value).toLowerCase().includes(this.searchTerm.toLowerCase()))
            );
          }
        }
      

  }
