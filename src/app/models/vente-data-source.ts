import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable } from "rxjs";
import { VenteService } from "../services/vente.service";
import { VenteDTO } from "./vente";

export class VenteDataSource implements DataSource<VenteDTO>{

    private ventes = new BehaviorSubject<VenteDTO[]>([]);
    private loadingVentes = new BehaviorSubject<boolean>(false);

    public totalElements: number = 0;

    public first!: boolean;

    public last!: boolean;

    public loading$ = this.loadingVentes.asObservable();

    constructor(private venteService : VenteService){

    }

    connect(collectionViewer: CollectionViewer): Observable<readonly VenteDTO[]> {
        return this.ventes.asObservable();
    }
    disconnect(collectionViewer: CollectionViewer): void {
        this.ventes.complete();
        this.loadingVentes.complete();
    }

    loadVentes(pageNumber=0, pageSize=10){
        this.loadingVentes.next(true);

        this.venteService.findVentes(pageNumber, pageSize)
            .subscribe(data => {
                this.ventes.next(data['content']);
                this.totalElements = data['totalElements'];
                this.first = data['first'];
                this.last = data['last'];
            });
    }
    
}
