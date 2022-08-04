import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable, of } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { AchatService } from "../services/achat.service";
import { AchatDTO } from "./achat";

export class AchatDataSource implements DataSource<AchatDTO>{

    private achats = new BehaviorSubject<AchatDTO[]>([]);

    public totalElements: number = 0;

    public first!: boolean;

    public last!: boolean;

    private loadingAchats = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingAchats.asObservable();

    constructor(private achatService : AchatService){

    }

    connect(collectionViewer: CollectionViewer): Observable<readonly AchatDTO[]> {
        return this.achats.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.achats.complete();
        this.loadingAchats.complete();
    }

    getDataSize(){
        return this.achats.value.length
    }

    loadAchats(pageNumber=0, pageSize=10){
        this.loadingAchats.next(true);

        this.achatService.findAchats(pageNumber, pageSize)
            .pipe(
                catchError(() => of([])),
                finalize(() => this.loadingAchats.next(false))
            ).subscribe(achats => {
                this.achats.next(achats['content'])
                this.totalElements = achats['totalElements'];
                this.first = achats['first'];
                this.last = achats['last'];
            });
    }
}
