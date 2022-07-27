import { HttpErrorResponse } from '@angular/common/http';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { VenteDTO } from 'src/app/models/vente';
import { VenteService } from 'src/app/services/vente.service';


@Component({
  selector: 'app-list-vente',
  templateUrl: './list-vente.component.html',
  styleUrls: ['./list-vente.component.css']
})
export class ListVenteComponent implements AfterViewInit {

  ventes! : Array<VenteDTO>;

  displayedColumns: string[] = ['idVente', 'dateVente', 'totalVente', 'options'];
  dataSource: MatTableDataSource<VenteDTO>;

  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private venteService : VenteService) {
    this.getVentes();
    this.dataSource = new MatTableDataSource(this.ventes);
  }

  public getVentes() : void {
    this.venteService.gets().subscribe(
      (response : VenteDTO[]) => {
        this.ventes = response;
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}