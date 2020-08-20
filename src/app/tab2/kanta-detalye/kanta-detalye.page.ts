import { Component, OnInit } from '@angular/core';
import { Song, SongService } from 'src/app/services/song.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-kanta-detalye',
  templateUrl: './kanta-detalye.page.html',
  styleUrls: ['./kanta-detalye.page.scss'],
})
export class KantaDetalyePage implements OnInit {

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
      this.loadFilipino();
    }
  }

  async loadFilipino() {
    const loading = await this.loadingController.create({
      message: 'Loading Song..'
    });
    await loading.present();

    this.songService.getFilipino(this.songId).subscribe(res => {
      loading.dismiss();
      this.song = res;
      this.subtitle = this.song.artist + '\n' + this.song.album + "<br>" + this.song.composer;
    });

  }

}
