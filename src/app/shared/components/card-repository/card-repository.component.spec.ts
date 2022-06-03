import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRepositoryComponent } from './card-repository.component';

describe('CardRepositoryComponent', () => {
  let component: CardRepositoryComponent;
  let fixture: ComponentFixture<CardRepositoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRepositoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
