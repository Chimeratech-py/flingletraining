import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersTestComponent } from './members-test.component';

describe('MembersTestComponent', () => {
  let component: MembersTestComponent;
  let fixture: ComponentFixture<MembersTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
