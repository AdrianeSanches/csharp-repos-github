import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryNameComponent } from './repository-name.component';

describe('RepositoryNameComponent', () => {
  let component: RepositoryNameComponent;
  let fixture: ComponentFixture<RepositoryNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepositoryNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepositoryNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
