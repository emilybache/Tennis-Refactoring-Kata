import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {TennisGame3Component} from './tennis-game3/tennis-game3.component';
import {TennisGame1Component} from './tennis-game1/tennis-game1.component';
import {TennisGame2Component} from './tennis-game2/tennis-game2.component';
import {testImports} from '../test/tennisTester';

describe('App', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: testImports,
      declarations: [
        AppComponent,
        TennisGame1Component,
        TennisGame2Component,
        TennisGame3Component,
      ],
    }).compileComponents();
  }));

  it('should be created', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
