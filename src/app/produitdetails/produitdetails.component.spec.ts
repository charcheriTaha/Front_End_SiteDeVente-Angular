import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitdetailsComponent } from './produitdetails.component';

describe('ProduitdetailsComponent', () => {
  let component: ProduitdetailsComponent;
  let fixture: ComponentFixture<ProduitdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
