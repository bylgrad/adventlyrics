import { Component, OnInit } from '@angular/core';
import { Song, SongService } from 'src/app/services/song.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-kanta-porma',
  templateUrl: './kanta-porma.page.html',
  styleUrls: ['./kanta-porma.page.scss'],
})
export class KantaPormaPage implements OnInit {


  song: Song = {
    title: '',
    artist: '',
    album: '',
    composer: '',
    lyrics: ''
  }
  songId = null;

  constructor(private songService: SongService, private route: ActivatedRoute,
    private loadingController: LoadingController, private nav: NavController) { }

  ngOnInit() {
  }

  async saveSong() {
    const loading = await this.loadingController.create({
      message: 'Saving Song..'
    });
    await loading.present();

    if (this.songId) {
      this.songService.updateSong(this.song, this.songId).then(() => {
        loading.dismiss();
        this.nav.navigateBack('/tabs/tab2');
      });

    } else {
      this.songService.addFilipino(this.song).then(() => {
        loading.dismiss();
        this.nav.navigateBack('/tabs/tab2');
      });
  }
}

}
