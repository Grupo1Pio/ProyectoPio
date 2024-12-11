import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionsillasComponent } from './seleccionsillas.component';

describe('SeleccionsillasComponent', () => {
  let component: SeleccionsillasComponent;
  let fixture: ComponentFixture<SeleccionsillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeleccionsillasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeleccionsillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
