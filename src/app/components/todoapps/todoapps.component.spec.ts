import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoappsComponent } from './todoapps.component';

describe('TodoappsComponent', () => {
  let component: TodoappsComponent;
  let fixture: ComponentFixture<TodoappsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoappsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoappsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
