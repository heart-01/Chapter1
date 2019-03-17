import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  
  //items = ["Siwat","Premruthai","Aun","Yanisa","Chanyanuch"]; // ประกาศตัวแปร Array ชื่อ items

  items=[{name : "Siwat",tel : "0871548601",avatar : "1.png"},
         {name : "Prem",tel : "0871548602",avatar : "1.png"},
         {name : "Aun",tel : "0871548603",avatar : "1.png"},
         {name : "Tana",tel : "0871548604",avatar : "1.png"},
         {name : "Yani",tel : "0871548605",avatar : "1.png"}
        ]; //สร้าง Array 1 ตัว และมี Object หลายๆชุด
  
  itemSelected(item : string){ // สร้างฟังชั่นหรือเมธอทชื่อ itemSelected มีพารามิเตอร์ ชื่อ item ชนิด String
    console.log("Selected Item: ",item); //console.log จะเป็นฟังชั่นเทสการส่งค่าแล้วแสดงผล Selected Item: กับ สิ่งที่คลิ๊กว่าส่งมาแล้วรึยัง โดยการกด F12 ในเว็บเบาเซอร์
  }

  constructor(public navCtrl: NavController) {

  }

}
