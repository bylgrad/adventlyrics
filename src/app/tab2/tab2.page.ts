import { Component, OnInit } from '@angular/core';
import { Song, SongService } from '../services/song.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  filipinos: Song[];

  constructor(private songService: SongService) {}

  ngOnInit() {
    this.songService.getFilipinos().subscribe(res => {
      this.filipinos = res.sort((a, b) => (a.title > b.title) ? 1 : -1);
    });
  }
}
