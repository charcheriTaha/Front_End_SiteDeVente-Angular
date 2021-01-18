import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandedetailsComponent } from './commandedetails.component';

describe('CommandedetailsComponent', () => {
  let component: CommandedetailsComponent;
  let fixture: ComponentFixture<CommandedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
