import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Route ,Router } from '@angular/router';
import {CatalogueService} from '../catalogue.service';

@Component({
  selector: 'app-products',//indique la déclaration qui permet d’insérer le composant dans le document HTML.
  templateUrl: './products.component.html', // permet d’associer un fichier externe HTML contenant la structure de la vue du composant
  styleUrls: ['./products.component.css'] //spécifier les feuilles de styles CSS associées à ce composant
})
export class ProductsComponent implements OnInit {

  
    products: any;

  constructor(public catalogueService: CatalogueService ,
               private route: ActivatedRoute,
               private router: Router ) { }

  ngOnInit()  {
    this.router.events.subscribe(value => {
      if(value instanceof NavigationEnd){
        let url = value.url;
        console.log(url);

        let p1=this.route.snapshot.params.p1;
        if(p1==1){
          this.getProducts('/products/search/selectedProducts');
        } else if (p1==2){
          let idCat = this.route.snapshot.params.p2;
          this.getProducts('/categories' +idCat+ 'products');
        }
      }
    });
    let p1=this.route.snapshot.params.p1;
    if(p1==1){
 this.getProducts('/products/search/selectedProducts');
    }
   
  }


  public getProducts(url: string){
    this.catalogueService.getResource(url)
      .subscribe(data=>{
        this.products = data ;

      },error => {console.log(error);
      })
  }
}
