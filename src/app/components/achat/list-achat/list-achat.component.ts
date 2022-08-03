import { HttpErrorResponse } from '@angular/common/http';
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AchatDTO } from 'src/app/models/achat';
import { AchatDataSource } from 'src/app/models/achat-data-source';
import { AchatService } from 'src/app/services/achat.service';


@Component({
  selector: 'app-list-achat',
  templateUrl: './list-achat.component.html',
  styleUrls: ['./list-achat.component.css']
})
export class ListAchatComponent implements AfterViewInit, OnInit {

//  achats! : Array<AchatDTO>

  displayedColumns: string[] = ['idAchat', 'dateEnregistrement', 'coutTotal', 'options'];
  dataSource!: AchatDataSource;

  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private achatService : AchatService) {
  }
  ngOnInit(): void {
    this.dataSource = new AchatDataSource(this.achatService);
    this.dataSource.loadAchats(0);
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
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
