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

  constructor(private songService: SongService, private platform: Platform) {
    
  }
  
  backButtonSubscription;

  ngOnInit() {
    this.songService.getSongs().subscribe(res => {
      this.songs = res.sort((a, b) => (a.title > b.title) ? 1 : -1);
    });
  }

  // ngOnChanges() {
  //   this.typeSearch(s);
  // }

  remove(item) {
    this.songService.removeSong(item.id);
  }

  public searchTerm: string = "";
  typeSearch(ev) { 
    let keyword = ev.target.value;
    let i:any;
    // this.songService.getSongs().subscribe(res => {
    //   res.some((a, index) => {
    //     if(a.title.toUpperCase() === keyword.toUpperCase()) {
    //       console.log(a.title);
    //       i = index;
    //     }
    //   });
    //   console.log(iterations +" : "+ i);
    // })
    this.songs.filter((a, index) => {
          if(a.title.toUpperCase().match(keyword.toUpperCase())) {
            i = index;
            console.log("Title: " + a.title + " Index: " + i);
          }
        });
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
