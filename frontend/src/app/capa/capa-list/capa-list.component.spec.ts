import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapaListComponent } from './capa-list.component';

describe('CapaListComponent', () => {
  let component: CapaListComponent;
  let fixture: ComponentFixture<CapaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapaListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
