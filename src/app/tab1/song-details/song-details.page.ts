import { Component, OnInit } from '@angular/core';
import { Song, SongService } from 'src/app/services/song.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.page.html',
  styleUrls: ['./song-details.page.scss'],
})
export class SongDetailsPage implements OnInit {

  song: Song = {
    title: '',
    artist: '',
    album: '',
    composer: '',
    lyrics: ''
  }
  subtitle: string;

  songId = null;

  constructor(private songService: SongService, private route: ActivatedRoute,
    private loadingController: LoadingController, private nav: NavController) { }

  ngOnInit() {
    this.songId = this.route.snapshot.params['id'];
    if (this.songId) {
      this.loadSong();
    }
  }

  async loadSong() {
    const loading = await this.loadingController.create({
      message: 'Loading Song..'
    });
    await loading.present();

    this.songService.getSong(this.songId).subscribe(res => {
      loading.dismiss();
      this.song = res;
      this.subtitle = this.song.artist + '\n' + this.song.album + "<br>" + this.song.composer;
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

// tutorial: https://www.youtube.com/watch?v=H20l9ofyR54