import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecherchevendeurComponent } from './recherchevendeur.component';

describe('RecherchevendeurComponent', () => {
  let component: RecherchevendeurComponent;
  let fixture: ComponentFixture<RecherchevendeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecherchevendeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecherchevendeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
