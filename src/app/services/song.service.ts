import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable, from } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { map } from 'rxjs/operators';

export interface Song {
  title: string;
  artist: string;
  album: string;
  composer: string;
  lyrics: string;
}
@Injectable({
  providedIn: 'root'
})
export class SongService {

  private songsCollection: AngularFirestoreCollection<Song>;
  private kantaCollection: AngularFirestoreCollection<Song>;

  private songs: Observable<Song[]>;
  private liriko: Observable<Song[]>;

  constructor(db: AngularFirestore) { 
    this.songsCollection = db.collection<Song>('songs');
    this.songs = this.songsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

    this.kantaCollection = db.collection<Song>('liriko');
    this.liriko = this.kantaCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      })
    )
  }

  getSongs() {
    return this.songs;
  }
  getFilipinos() {
    return this.liriko;
  }

  getSong(id) {
    return this.songsCollection.doc<Song>(id).valueChanges();
  }
  getFilipino(id) {
    return this.kantaCollection.doc<Song>(id).valueChanges();
  }

  updateSong(song: Song, id: string) {
    return this.songsCollection.doc(id).update(song);
  }

  addSong(song: Song) {
    return this.songsCollection.add(song);
  }
  addFilipino(kanta: Song) {
    return this.kantaCollection.add(kanta);
  }

  removeSong(id) {
    return this.songsCollection.doc(id).delete();
  }
}
