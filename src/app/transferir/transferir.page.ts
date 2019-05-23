import { Component } from '@angular/core';
import { ApiService } from '../services/api.service'

@Component({
  selector: 'app-transferir',
  templateUrl: 'transferir.page.html',
  styleUrls: ['transferir.page.scss']
})
export class TransferirPage {
  
  information = null;
  numberFrom = null;
  numberTo = null;
  amount = null;
  saldo = 0;
  errorMessage = ""
  constructor(
    private apiService:ApiService
  ) {
    this.initializeApp();
  }
  
  async initializeApp() {
    this.apiService.consultarPoints(977434824).subscribe( data => {
      if (data["success"] == false){
        this.saldo = 0
      }else {
        this.saldo = data["message"]
      }
    })
  }
  
  async transferir(){
    this.errorMessage = ""
    const result = await this.apiService.transferPoint(this.numberFrom, this.numberTo, this.amount)
    if (result["success"] == false) {
      this.errorMessage = result["message"]
    }else{
      this.apiService.consultarPoints(977434824).subscribe( data => {
        this.saldo = data["message"]
      })    
    }
  }


}
