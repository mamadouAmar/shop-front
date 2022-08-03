import {OnInit, Component, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { ProduitDataSource } from 'src/app/models/produit-data-source';
import { ProduitService } from 'src/app/services/produit.service';


@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit, AfterViewInit{

  datasource! : ProduitDataSource;

  displayedColumns: string[] = ['idProduit', 'libelle', 'stock', 'options'];

  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private produitService : ProduitService) {
    
  }
  ngAfterViewInit(): void {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.datasource = new ProduitDataSource(this.produitService);
    this.datasource.loadProduits();

  }

  applyFilter(event: Event) {
    // const filterValue = (event.target as HTMLInputElement).value;
    // this.datasource.filter = filterValue.trim().toLowerCase();

    // if (this.datasource.paginator) {
    //   this.datasource.paginator.firstPage();
    // }
  }


  public onPlusClick(row : any){
    console.log(row)
  }

  public onModClick(row : any){
    console.log(row)
  }

  public onSupClick(row : any){
    console.log(row)
  }
}
