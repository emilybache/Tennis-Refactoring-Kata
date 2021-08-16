import {TennisGame} from '../app/TennisGame';
import {TennisGame3Component} from '../app/tennis-game3/tennis-game3.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

export const testImports = [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatCardModule
  ];

export class TennisComponentTester {
  component: TennisGame;
  fixture: ComponentFixture<TennisGame3Component>;
  element: any;
  private readonly tennisComponentIndex = 0;

  async beforeEach(declarations: any[]) {
    await TestBed.configureTestingModule({
      imports: testImports,
      declarations
    }).compileComponents();
    this.fixture = TestBed.createComponent(declarations[this.tennisComponentIndex]);
    this.component = this.fixture.componentInstance;
    this.element = this.fixture.nativeElement;
    this.fixture.detectChanges();
    // @ts-ignore
    expect(this.component).toBeTruthy();
  }

  private getElement(elementSelector: string) {
    return this.fixture.debugElement.query(By.css(elementSelector));
  }

  getStylesFor(selectors: string) {
    const element = this.element.querySelector(selectors);
    return getComputedStyle(element);
  }

  getParentStylesFor(selectors: string) {
    const element = this.getElement(selectors);
    return getComputedStyle(element.parent.nativeElement);
  }

  setInputValue(inputSelector: string, newValue: number | string) {
    const inputElement = this.element.querySelector(inputSelector);
    inputElement.value = newValue;
    inputElement.dispatchEvent(new Event('input'));
  }

  selectElement(elementSelector: string) {
    const element = this.element.querySelector(elementSelector);
    element.click();
    this.fixture.detectChanges();
  }

  verifyLabelText(labelSelector: string, expectedText: number | string) {
    const label = this.getElement(labelSelector);
    // @ts-ignore
    expect(label.nativeElement.outerText).toBe(expectedText);
  }

  verifyElementExists(selector: string) {
    const element = this.getElement(selector);
    // @ts-ignore
    expect(element).toBeTruthy();
  }
}
