import { Component, OnInit } from '@angular/core';
import { Song, SongService } from 'src/app/services/song.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, AlertController } from '@ionic/angular';

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
    private loadingController: LoadingController, private nav: NavController,
    public alertController: AlertController) { }

  ngOnInit() {
    this.songId = this.route.snapshot.params['id'];
    if (this.songId) {
      this.loadSong();
    }
    // console.log("PORA LOG (Song ID):"+this.songId);
  }

  async loadSong() {
    const loading = await this.loadingController.create({
      message: 'Loading Song..'
    });
    await loading.present();

    this.songService.getSong(this.songId).subscribe(res => {
      loading.dismiss();
      this.song = res;
      // console.log("PORA LOG(LOAD SONG): " + this.song);
    });
  }

  async saveSong() {
    const loading = await this.loadingController.create({
      message: 'Saving Song..'
    });

    if (this.songId) {
      this.songService.updateSong(this.song, this.songId).then(() => {
        loading.dismiss();
        this.nav.navigateBack('/tabs/tab1');
      });

    } else {
      if (this.song.title == '' || !this.song.title || this.song.lyrics == ''|| !this.song.lyrics) {        
        // BEGIN toast when incomplete input
        // const toast = await this.toastController.create({
        //   message: 'Please complete the title and the lyrics.',
        //   duration: 2000
        // });
        // toast.present();
        // END toast when incomplete input

        // BEGIN alert when incomplete input
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Oops!',
          subHeader: 'Incomplete details',
          message: "Make sure to fill the Title and the Lyrics.",
          buttons: ['OK']
        });    
        await alert.present();
        // END alert when incomplete input
      }      
      else {
        await loading.present();
        this.song.lyrics = this.song.lyrics.replace(/(?:\r\n|\r|\n)/g, '<br>'); // replace newline/line break/enter with <br>
        
        // BEGIN Uncomment this
        // this.songService.addSong(this.song).then(() => {
        //   loading.dismiss();
        //   this.nav.navigateBack('/tabs/tab1');
        // });
        // END uncomment this

        // BEGIN experimental Offline saving
        this.songService.addSong(this.song);
        loading.dismiss();
        this.nav.navigateBack('/tabs/tab1');
      // END experimental Offline saving
    }
  }
}

}
