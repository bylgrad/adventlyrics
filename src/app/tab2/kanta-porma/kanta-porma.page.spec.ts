import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KantaPormaPage } from './kanta-porma.page';

describe('KantaPormaPage', () => {
  let component: KantaPormaPage;
  let fixture: ComponentFixture<KantaPormaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KantaPormaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KantaPormaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
