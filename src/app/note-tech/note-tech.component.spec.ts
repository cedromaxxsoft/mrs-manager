import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteTechComponent } from './note-tech.component';

describe('NoteTechComponent', () => {
  let component: NoteTechComponent;
  let fixture: ComponentFixture<NoteTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
