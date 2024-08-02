import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  @Input() cardName: string = '';
  @Input() cardHolder: string = '';
  @Input() numberCard: string = '';

  constructor() { 
    this.cardName = 'Eduardo Landa'
    this.cardHolder = '10/27'
    this.numberCard = '4156674677368919';
  }

  ngOnInit(): void {
  }

}
