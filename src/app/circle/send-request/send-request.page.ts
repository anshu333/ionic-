import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.page.html',
  styleUrls: ['./send-request.page.scss'],
})
export class SendRequestPage implements OnInit {
  show:boolean=true;

  card:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  SendReq(){
    this.show=false;
    this.card=true;
  }

  back(){
    this.show=true;
    this.card=false;
  }

}
