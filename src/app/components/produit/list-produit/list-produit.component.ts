import { HttpErrorResponse } from '@angular/common/http';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ProduitDTO } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';


@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements AfterViewInit{

  produits! : Array<ProduitDTO>; 

  displayedColumns: string[] = ['idProduit', 'libelle', 'stock', 'options'];
  dataSource: MatTableDataSource<ProduitDTO>;

  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private produitService : ProduitService) {
    this.getProduits();
    this.dataSource = new MatTableDataSource(this.produits);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public getProduits() : void {
    this.produitService.gets().subscribe(
      (response : ProduitDTO[])=>{
        this.produits = response;
      }, 
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
