import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { tap } from 'rxjs/operators';
import { VenteDataSource } from 'src/app/models/vente-data-source';
import { VenteService } from 'src/app/services/vente.service';


@Component({
  selector: 'app-list-vente',
  templateUrl: './list-vente.component.html',
  styleUrls: ['./list-vente.component.css']
})
export class ListVenteComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['idVente', 'dateVente', 'totalVente', 'options'];
  dataSource!: VenteDataSource;

  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private venteService : VenteService) {
    
  }
  ngOnInit(): void {
    this.dataSource = new VenteDataSource(this.venteService);
    this.dataSource.loadVentes(0);
  }



  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
    this.paginator.page
      .pipe(
        tap(() => this.loadVentesPage())  
      ).subscribe()
  }
  loadVentesPage() {
    this.dataSource.loadVentes(
      this.paginator.pageIndex,
      this.paginator.pageSize
    )
  }

  applyFilter(event: Event) {
    // const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();

    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
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