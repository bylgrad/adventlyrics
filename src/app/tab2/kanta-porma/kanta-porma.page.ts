import { Component, OnInit } from '@angular/core';
import { Song, SongService } from 'src/app/services/song.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController, AlertController } from '@ionic/angular';

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
    private loadingController: LoadingController, private nav: NavController,
    public toastController: ToastController,
    public alertController: AlertController) { }

  ngOnInit() {
  }

  

  async saveSong() {
    const loading = await this.loadingController.create({
      message: 'Saving Song..'
    });

    if (this.songId) {
      this.songService.updateSong(this.song, this.songId).then(() => {
        loading.dismiss();
        this.nav.navigateBack('/tabs/tab2');
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
          header: 'Pasensya',
          subHeader: 'Kumpletuhin ang Form',
          message: "Siguraduhing mayroong TITLE at LYRICS bago i-save.",
          buttons: ['OK']
        });    
        await alert.present();
        // END alert when incomplete input
      }
      else {
        await loading.present(); 
        this.song.lyrics = this.song.lyrics.replace(/(?:\r\n|\r|\n)/g, '<br>'); // replace newline/line break/enter with <br>
      
      // Uncomment this
      //   this.songService.addFilipino(this.song).then(() => {
      //   loading.dismiss();
      //   this.nav.navigateBack('/tabs/tab2');
      // });
      // Uncomment this

      // BEGIN experimental Offline saving
      this.songId = "testid";
      this.songService.addFilipino(this.song);
      loading.dismiss();
      this.nav.navigateBack('/tabs/tab2');
      // END experimental Offline saving
    }
  }
}

}
