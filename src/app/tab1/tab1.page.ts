import { Component, OnInit } from '@angular/core';
import { Song, SongService } from '../services/song.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  songs: Song[];

  constructor(private songService: SongService, private platform: Platform) {}
  
  backButtonSubscription;

  ngOnInit() {
    this.songService.getSongs().subscribe(res => {
      this.songs = res.sort((a, b) => (a.title > b.title) ? 1 : -1);
    });
  }

  remove(item) {
    this.songService.removeSong(item.id);
  }

//   ionViewWillEnter() {
//     this.backButtonSubscription = this.platform.backButton.subscribe(async () => {
//     navigator['app'].exitApp();
//     });
// // //     this.platform.backButton.subscribeWithPriority(1, () => {
// // //       navigator['app'].exitApp();
// // //        });
//    }
   
//    ionViewDidLeave() {
//     this.backButtonSubscription.unsubscribe();
//    }
}
