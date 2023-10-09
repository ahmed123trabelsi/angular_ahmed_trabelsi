import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { InvoiceListComponentComponent } from '../invoice-list-component/invoice-list-component.component';
import { Invoice } from '../models/invoice';
@Component({
  selector: 'app-invoice-component',
  templateUrl: './invoice-component.component.html',
  styleUrls: ['./invoice-component.component.css']
})
export class InvoiceComponentComponent implements OnInit {
  IdFacture!: number;
  active!: boolean;
  


 invoices: Invoice[] = []; // Déclarez un tableau pour stocker les invoices

  constructor(private route: ActivatedRoute, public invoiceListComponent: InvoiceListComponentComponent) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.IdFacture = +params.get('id')!;
      this.active = params.get('active') === 'true';

      // Accédez à la liste d'invoices depuis le composant InvoiceListComponentComponent
    this.invoices=this.invoiceListComponent.listeInvoice;
  
    });
  }
}
