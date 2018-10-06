import { Injectable } from '@angular/core';
import { HeroesData} from '../interfaces/heroes-interfaces';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestoreModule} from '@angular/fire/firestore';
import {Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  heroesCollection: AngularFirestoreCollection<HeroesData>;
  heroeDoc: AngularFirestoreDocument<HeroesData>;
  heroes: Observable<HeroesData[]>;
  heroe: Observable<HeroesData>;

  constructor(private afs: AngularFirestore) { 

    this.heroesCollection = this.afs.collection('heroes', ref =>  ref);
  }

  addnewHeroe( heroe: HeroesData){
    this.heroesCollection.add(heroe);

  }


  getAllHeroes():Observable <HeroesData[]>{
    this.heroes = this.heroesCollection.snapshotChanges().pipe(
      map(changes => {
         return changes.map(action => {
           const data = action.payload.doc.data() as HeroesData;
           data.id = action.payload.doc.id;
           return data;
         });

      }));
      return this.heroes;
     }
     getOneHeroe(idHeroe: string) {
      this.heroeDoc = this.afs.doc<HeroesData>(`heroes/${idHeroe}`);
      this.heroe = this.heroeDoc.snapshotChanges().pipe(map(action => {
        if (action.payload.exists === false) {
          return null;
        } else {

          const data = action.payload.data()as HeroesData;
          data.id = action.payload.id;
          return data;
        }

      }));
      return this.heroe;

     }

     updateheroe( heroe: HeroesData){
      this.heroeDoc = this.afs.doc(`heroes/${heroe.id}`);
      this.heroeDoc.update(heroe);
    }
    deleteHeroe(heroe: HeroesData){
     this.heroeDoc = this.afs.doc(`heroes/${heroe.id}`);
     this.heroeDoc.delete();

    }

}
