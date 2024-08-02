import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent implements OnInit {

  cards = [
    { cardName: 'Eduardo Moncada', cardHolder: '10/27', numberCard: '4156674677368919', imgCard: '../../../assets/img/brand.gif'},
    { cardName: 'Juan Pérez', cardHolder: '12/25', numberCard: '5198734654212365', imgCard: '../../../assets/img/santander.png' },
    { cardName: 'Ana García', cardHolder: '08/24', numberCard: '3465432109876543', imgCard: '../../../assets/img/banamex.png' },
    { cardName: 'Luis Fernández', cardHolder: '03/26', numberCard: '6011122233445566', imgCard: '../../../assets/img/banco-azteca.png' },
    { cardName: 'Marta López', cardHolder: '11/28', numberCard: '378282246310005', imgCard: '../../../assets/img/bbva.png' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  currentIndex = 0;
  slides = document.querySelectorAll('.carousel-item');
  indicators = document.querySelectorAll('.indicator');

  nextSlide() {
    this.changeSlide(this.currentIndex + 1);
  }

  prevSlide() {
    this.changeSlide(this.currentIndex - 1);
  }

  goToSlide(index: number) {
    this.changeSlide(index);
  }

  changeSlide(index: number) {
    if (index >= this.slides.length) index = 0;
    if (index < 0) index = this.slides.length - 1;

    (document.querySelector('.carousel-inner') as HTMLElement).style.transform = `translateX(-${index * 100}%)`;
    
    this.indicators.forEach(indicator => indicator.classList.remove('active'));
    this.indicators[index].classList.add('active');

    this.currentIndex = index;
  }

}
