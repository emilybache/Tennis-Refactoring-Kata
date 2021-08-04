import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {TennisGame3Component} from './tennis-game3/tennis-game3.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TennisGame1Component} from './tennis-game1/tennis-game1.component';
import {TennisGame2Component} from './tennis-game2/tennis-game2.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        TennisGame1Component,
        TennisGame2Component,
        TennisGame3Component,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
