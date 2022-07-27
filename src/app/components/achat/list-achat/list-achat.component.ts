import { HttpErrorResponse } from '@angular/common/http';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AchatDTO } from 'src/app/models/achat';
import { AchatService } from 'src/app/services/achat.service';


@Component({
  selector: 'app-list-achat',
  templateUrl: './list-achat.component.html',
  styleUrls: ['./list-achat.component.css']
})
export class ListAchatComponent implements AfterViewInit {

  achats! : Array<AchatDTO>

  displayedColumns: string[] = ['idAchat', 'dateEnregistrement', 'coutTotal', 'options'];
  dataSource: MatTableDataSource<AchatDTO>;

  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private achatService : AchatService) {

    this.getAchats();
    this.dataSource = new MatTableDataSource(this.achats);
  }

  public getAchats(): void {
    this.achatService.gets().subscribe(
      (response : AchatDTO[]
    ) => {
      this.achats = response;
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
