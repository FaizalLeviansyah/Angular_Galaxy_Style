import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { candidates } from './data';


@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {
  candidates: any;

  constructor() { }

  ngOnInit(): void {

    // Fetch Data
    this.candidates = candidates
  }

  /**
  * Swiper Responsive setting
  */
  public Responsive: SwiperOptions = {
    pagination: true,
    navigation: true,
    spaceBetween: 22,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 4,
      }
    }
  };

}
