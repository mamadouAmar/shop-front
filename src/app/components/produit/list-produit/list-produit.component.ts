import { HttpErrorResponse } from '@angular/common/http';
import {OnInit, Component, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatRow, MatTableDataSource} from '@angular/material/table';
import { ProduitDTO } from 'src/app/models/produit';
import { ProduitDataSource } from 'src/app/models/produit-data-source';
import { ProduitService } from 'src/app/services/produit.service';


@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit, AfterViewInit{

  // produits : ProduitDTO[] = [];
  datasource! : ProduitDataSource;

  displayedColumns: string[] = ['idProduit', 'libelle', 'stock', 'options'];
  // dataSource = new MatTableDataSource<ProduitDTO>();

  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private produitService : ProduitService) {
    console.log("constructor")
    // console.log(this.produits)
    //this.dataSource = new MatTableDataSource(this.produits);
  }
  ngAfterViewInit(): void {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    // this.getProduits();
    this.datasource = new ProduitDataSource(this.produitService);
    this.datasource.loadProduits();
    console.log("datasource in ngOnit after initializing prodits "+ this.datasource);

  }

  // public getProduits() : void {
  //   this.produitService.findProduits(0, 2).subscribe(
  //     (response : any)=>{
  //       console.log(response)
  //       this.produits = response['content'];
  //     },
  //     (error : HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  //}

  applyFilter(event: Event) {
    // const filterValue = (event.target as HTMLInputElement).value;
    // this.datasource.filter = filterValue.trim().toLowerCase();

    // if (this.datasource.paginator) {
    //   this.datasource.paginator.firstPage();
    // }
  }


  public onPlusClick(row : any){
    console.log("row clicked"+row)
  }

  public onModClick(row : MatRow){

  }

  public onSupClick(row : MatRow){
    
  }
}
