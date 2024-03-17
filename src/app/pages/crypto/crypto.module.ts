import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule, NgbNavModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

// Counter
import { CountToModule } from 'angular-count-to';
// Flat Picker
import { FlatpickrModule } from 'angularx-flatpickr';

// Swiper Slider
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

// Apex Chart Package
import { NgApexchartsModule } from 'ng-apexcharts';

// File Uploads
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

// NG2 Search Filter
import { Ng2SearchPipeModule } from 'ng2-search-filter';

// Component pages
import { CryptoRoutingModule } from './crypto-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { TransactionsComponent } from './transactions/transactions.component';
import { BuySellComponent } from './buy-sell/buy-sell.component';
import { OrdersComponent } from './orders/orders.component';
import { WalletComponent } from './wallet/wallet.component';
import { IcoComponent } from './ico/ico.component';
import { KycComponent } from './kyc/kyc.component';

import {DatePipe} from '@angular/common';

// sorting
import{ NgbdBuySellSortableHeader} from './buy-sell/buy-sell-sortable.directive';
import{NgbdTransactionsSortableHeader} from './transactions/transactions-sortable.directive';
import{NgbdOrdersSortableHeader} from './orders/orders-sortable.directive'


// Load Icons
import { defineElement } from 'lord-icon-element';
import lottie from 'lottie-web';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*'
};


@NgModule({
  declarations: [
    TransactionsComponent,
    BuySellComponent,
    OrdersComponent,
    WalletComponent,
    IcoComponent,
    KycComponent,
    NgbdBuySellSortableHeader,
    NgbdTransactionsSortableHeader,
    NgbdOrdersSortableHeader
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    NgbNavModule,
    NgbDropdownModule,
    CountToModule,
    FlatpickrModule,
    NgxUsefulSwiperModule,
    NgApexchartsModule,
    DropzoneModule,
    CryptoRoutingModule,
    SharedModule,
    Ng2SearchPipeModule
  ],
  providers: [
    DatePipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CryptoModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
 }
