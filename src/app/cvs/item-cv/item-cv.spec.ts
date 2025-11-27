import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCv } from './item-cv';

describe('ItemCv', () => {
  let component: ItemCv;
  let fixture: ComponentFixture<ItemCv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCv);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
