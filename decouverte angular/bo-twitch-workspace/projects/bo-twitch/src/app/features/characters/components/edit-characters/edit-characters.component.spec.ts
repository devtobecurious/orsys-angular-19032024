import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCharactersComponent } from './edit-characters.component';

describe('EditCharactersComponent', () => {
  let component: EditCharactersComponent;
  let fixture: ComponentFixture<EditCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCharactersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
