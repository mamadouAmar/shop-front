import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable, of } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { ProduitService } from "../services/produit.service";
import { ProduitDTO } from "./produit";

export class ProduitDataSource implements DataSource<ProduitDTO>{

    private produits = new BehaviorSubject<ProduitDTO[]>([]);
    private loadingProduits = new BehaviorSubject<boolean>(false);

    public totalElements: number = 0;

    public first!: boolean;

    public last!: boolean;

    public loading$ = this.loadingProduits.asObservable();

    constructor(private produitService : ProduitService){

    }

    connect(collectionViewer: CollectionViewer): Observable<readonly ProduitDTO[]> {
        return this.produits.asObservable();
    }
    disconnect(collectionViewer: CollectionViewer): void {
        this.produits.complete();
        this.loadingProduits.complete();
    }

    loadProduits(pageNumber=0, pageSize=10){
        this.loadingProduits.next(true);

        this.produitService.findProduits
        (pageNumber, pageSize).pipe(
            catchError(() => of([])),
            finalize(() => this.loadingProduits.next(false))
        ).subscribe(produits => {
            this.produits.next(produits['content'])
            this.totalElements = produits['totalElements'];
            this.first = produits['first'];
                this.last = produits['last'];
        });
    }
}
