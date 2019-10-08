import { Component, OnInit } from '@angular/core';
import { AppareilService } from 'src/app/services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {
  isAuth = true;
  mAppareils: any[];

  constructor(private appareilService: AppareilService){}

  ngOnInit(): void {
    this.mAppareils = this.appareilService.appareils;
  }

  onAllumer(){
    console.log("tout allumer");
    this.appareilService.switchOnAll();
  }

  onEteindre(){
    console.log("tout éteinder");
    this.appareilService.switchOffAll();
  }
}
