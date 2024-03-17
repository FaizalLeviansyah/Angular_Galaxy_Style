import { Component, QueryList, ViewChildren, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { NgbModal, NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { UntypedFormBuilder, UntypedFormGroup, FormArray, FormControl, Validators } from '@angular/forms';
// Date Format
import { DatePipe } from '@angular/common';

// Csv File Export
import { ngxCsv } from 'ngx-csv/ngx-csv';

// Sweet Alert
import Swal from 'sweetalert2';

import { OrdersModel } from './orders.model';
import { Orders } from './data';
import { OrdersService } from './orders.service';
import { NgbdOrdersSortableHeader, orderSortEvent } from './orders-sortable.directive';

// Rest Api Service
import { restApiService } from "../../../core/services/rest-api.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  providers: [OrdersService, DecimalPipe]
})

/**
 * Orders Component
 */
export class OrdersComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  ordersForm!: UntypedFormGroup;
  submitted = false;
  CustomersData!: OrdersModel[];
  masterSelected!: boolean;
  checkedList: any;
  customerName?: any;

  Pending = 'Pending';
  Inprogress = 'Inprogress';
  Cancelled = 'Cancelled';
  Pickups = 'Pickups';
  Returns = 'Returns';
  Delivered = 'Delivered';

  // Api Data
  content?: any;
  econtent?: any;
  orderes?: any;


  // Table data
  ordersList!: Observable<OrdersModel[]>;
  total: Observable<number>;
  @ViewChildren(NgbdOrdersSortableHeader) headers!: QueryList<NgbdOrdersSortableHeader>;

  constructor(private modalService: NgbModal, public service: OrdersService, private formBuilder: UntypedFormBuilder, private restApiService: restApiService, private datePipe: DatePipe) {
    this.ordersList = service.countries$;
    this.total = service.total$;
  }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Ecommerce' },
      { label: 'Orders', active: true }
    ];

    /**
     * Form Validation
     */
    this.ordersForm = this.formBuilder.group({
      orderId: "#VZ2101",
      _id: "#1",
      ids: [''],
      customer: ['', [Validators.required]],
      product: ['', [Validators.required]],
      orderDate: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      payment: ['', [Validators.required]],
      status: ['', [Validators.required]]
    });

    /**
    * fetches data
    */
    setTimeout(() => {
      this.ordersList.subscribe(x => {
        this.orderes = Object.assign([], x);
      });
      document.getElementById('elmLoader')?.classList.add('d-none')
    }, 1000);
  }

  /**
   * Open modal
   * @param content modal content
  */
  openModal(content: any) {
    this.submitted = false;
    this.modalService.open(content, { size: 'md', centered: true });
  }

  /**
  * Form data get
  */
  get form() {
    return this.ordersForm.controls;
  }

  /**
   * change navigation
   */
  onNavChange(changeEvent: NgbNavChangeEvent) {
    if (changeEvent.nextId === 1) {
      this.service.status = ''
    }
    if (changeEvent.nextId === 2) {
      this.service.status = 'Delivered'
    }
    if (changeEvent.nextId === 3) {
      this.service.status = 'Pickups'
    }
    if (changeEvent.nextId === 4) {
      this.service.status = 'Returns'
    }
    if (changeEvent.nextId === 5) {
      this.service.status = 'Cancelled'
    }
  }

  /**
  * Save user
  */
  saveUser() {
    if (this.ordersForm.valid) {
      if (this.ordersForm.get('ids')?.value) {
        this.restApiService.patchOrderData(this.ordersForm.value).subscribe(
          (data: any) => {
            this.service.products = this.orderes.map((order: { _id: any; }) => order._id === data.data.ids ? { ...order, ...data.data } : order);
            this.modalService.dismissAll();
          }
        )
      }
      else {
        this.restApiService.postOrderData(this.ordersForm.value).subscribe(
          (data: any) => {
            this.service.products.push(data.data);
            this.modalService.dismissAll();
            let timerInterval: any;
            Swal.fire({
              title: 'Order inserted successfully!',
              icon: 'success',
              timer: 2000,
              timerProgressBar: true,
              willClose: () => {
                clearInterval(timerInterval);
              },
            }).then((result) => {
              /* Read more about handling dismissals below */
              if (result.dismiss === Swal.DismissReason.timer) {
              }
            });
          },)
      }
    }
    setTimeout(() => {
      this.ordersForm.reset();
    }, 2000);
    this.submitted = true
  }

  /**
   * Open Edit modal
   * @param content modal content
   */
  editDataGet(id: any, content: any) {
    this.submitted = false;
    this.modalService.open(content, { size: 'md', centered: true });
    var modelTitle = document.querySelector('.modal-title') as HTMLAreaElement;
    modelTitle.innerHTML = 'Edit Order';
    var updateBtn = document.getElementById('add-btn') as HTMLAreaElement;
    updateBtn.innerHTML = "Update";

    this.restApiService.getSingleOrderData(id).subscribe({
      next: data => {
        const users = JSON.parse(data);
        this.econtent = users.data;
        this.ordersForm.controls['customer'].setValue(this.econtent.customer);
        this.ordersForm.controls['product'].setValue(this.econtent.product);
        this.ordersForm.controls['orderDate'].setValue(this.econtent.orderDate);
        this.ordersForm.controls['amount'].setValue(this.econtent.amount);
        this.ordersForm.controls['payment'].setValue(this.econtent.payment);
        this.ordersForm.controls['status'].setValue(this.econtent.status);
        this.ordersForm.controls['ids'].setValue(this.econtent._id);
      },
      error: err => {
        this.content = JSON.parse(err.error).message;
      }
    });

  }

  /**
  * Delete Model Open
  */
  deleteId: any;
  confirm(content: any, id: any) {
    this.deleteId = id;
    this.modalService.open(content, { centered: true });
  }

  // Delete Data
  deleteData(id: any) {
    if (id) {
      this.restApiService.deleteOrder(id).subscribe({
        next: data => { },
        error: err => {
          this.content = JSON.parse(err.error).message;
        }
      });
      document.getElementById('o_' + id)?.remove();
    }
    else {
      this.checkedValGet.forEach((item: any) => {
        document.getElementById('o_' + item)?.remove();
      });
    }
  }

  /**
  * Multiple Delete
  */
  checkedValGet: any[] = [];
  deleteMultiple(content: any) {
    var checkboxes: any = document.getElementsByName('checkAll');
    var result
    var checkedVal: any[] = [];
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        result = checkboxes[i].value;
        checkedVal.push(result);
      }
    }
    if (checkedVal.length > 0) {
      this.modalService.open(content, { centered: true });
    }
    else {
      Swal.fire({ text: 'Please select at least one checkbox', confirmButtonColor: '#299cdb', });
    }
    this.checkedValGet = checkedVal;
  }

  // The master checkbox will check/ uncheck all items
  checkUncheckAll(ev: any) {
    this.orderes.forEach((x: { state: any; }) => x.state = ev.target.checked)
    var checkedVal: any[] = [];
    var result
    for (var i = 0; i < this.orderes.length; i++) {
      if (this.orderes[i].state == true) {
        result = this.orderes[i];
        checkedVal.push(result);
      }
    }
    this.checkedValGet = checkedVal
    checkedVal.length > 0 ? (document.getElementById("remove-actions") as HTMLElement).style.display = "block" : (document.getElementById("remove-actions") as HTMLElement).style.display = "none";
  }

  // Select Checkbox value Get
  onCheckboxChange(e: any) {
    var checkedVal: any[] = [];
    var result
    for (var i = 0; i < this.orderes.length; i++) {
      if (this.orderes[i].state == true) {
        result = this.orderes[i];
        checkedVal.push(result);
      }
    }
    this.checkedValGet = checkedVal
    checkedVal.length > 0 ? (document.getElementById("remove-actions") as HTMLElement).style.display = "block" : (document.getElementById("remove-actions") as HTMLElement).style.display = "none";
  }

  // Csv File Export
  csvFileExport() {
    var orders = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Order Data',
      useBom: true,
      noDownload: false,
      headers: ["id", "order Id", "customer", "product", "orderDate", "amount", "payment", "status"]
    };
    new ngxCsv(this.orderes, "orders", orders);
  }
  /**
  * Sort table data
  * @param param0 sort the column
  *
  */
  onSort({ column, direction }: orderSortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.ordersortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
