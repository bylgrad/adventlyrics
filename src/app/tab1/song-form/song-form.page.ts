import { Component, OnInit } from '@angular/core';
import { Song, SongService } from 'src/app/services/song.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.page.html',
  styleUrls: ['./song-form.page.scss'],
})
export class SongFormPage implements OnInit {


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
    this.songId = this.route.snapshot.params['id'];
    if (this.songId) {
      this.loadSong();
    }
    console.log("PORA LOG (Song ID):"+this.songId);
  }

  async loadSong() {
    const loading = await this.loadingController.create({
      message: 'Loading Song..'
    });
    await loading.present();

    this.songService.getSong(this.songId).subscribe(res => {
      loading.dismiss();
      this.song = res;
      console.log("PORA LOG(LOAD SONG): " + this.song);
    });
  }

  async saveSong() {
    const loading = await this.loadingController.create({
      message: 'Saving Song..'
    });
    await loading.present();

    if (this.songId) {
      this.songService.updateSong(this.song, this.songId).then(() => {
        loading.dismiss();
        this.nav.navigateBack('');
      });

    } else {
      this.songService.addSong(this.song).then(() => {
        loading.dismiss();
        this.nav.navigateBack('');
      });
  }
}

}
