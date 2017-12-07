import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerItemComponent } from './server-item.component';

describe('ServerItemComponent', () => {
  let component: ServerItemComponent;
  let fixture: ComponentFixture<ServerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
