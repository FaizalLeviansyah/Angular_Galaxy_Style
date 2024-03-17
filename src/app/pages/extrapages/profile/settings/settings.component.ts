import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from '../../../../core/services/token-storage.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})

/**
 * Profile Settings Component
 */
export class SettingsComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  userData:any;
  constructor(private TokenStorageService : TokenStorageService) { }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
     this.breadCrumbItems = [
      { label: 'Pages' },
      { label: 'Profile Settings', active: true }
    ];

    this.userData =  this.TokenStorageService.getUser(); 
  }

  /**
  * Multiple Default Select2
  */
   selectValue = ['Illustrator', 'Photoshop', 'CSS', 'HTML', 'Javascript', 'Python', 'PHP'];

}
