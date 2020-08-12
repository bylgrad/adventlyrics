import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SongFormPage } from './song-form.page';

describe('SongFormPage', () => {
  let component: SongFormPage;
  let fixture: ComponentFixture<SongFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SongFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
