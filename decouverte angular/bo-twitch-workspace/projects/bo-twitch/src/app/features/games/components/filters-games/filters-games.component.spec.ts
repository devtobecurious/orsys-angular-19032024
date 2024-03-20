import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersGamesComponent } from './filters-games.component';

describe('FiltersGamesComponent', () => {
  let component: FiltersGamesComponent;
  let fixture: ComponentFixture<FiltersGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltersGamesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiltersGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
