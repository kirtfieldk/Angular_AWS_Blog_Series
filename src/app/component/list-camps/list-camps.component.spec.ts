import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCampsComponent } from './list-camps.component';

describe('ListCampsComponent', () => {
  let component: ListCampsComponent;
  let fixture: ComponentFixture<ListCampsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCampsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
