import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KantaDetalyePage } from './kanta-detalye.page';

describe('KantaDetalyePage', () => {
  let component: KantaDetalyePage;
  let fixture: ComponentFixture<KantaDetalyePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KantaDetalyePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KantaDetalyePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
