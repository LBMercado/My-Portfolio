import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCreditComponent } from './footer-credit.component';

describe('FooterCreditComponent', () => {
  let component: FooterCreditComponent;
  let fixture: ComponentFixture<FooterCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterCreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
