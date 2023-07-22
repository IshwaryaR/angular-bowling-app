import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { GameRollComponent } from './page-content/game-roll/game-roll.component';
import { GameScoreComponent } from './page-content/game-score/game-score.component';
import { PageContentComponent } from './page-content/page-content.component';
import { PopUpComponent } from './page-content/pop-up/pop-up.component';
import { provideMockStore } from '@ngrx/store/testing';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [provideMockStore({}), MatDialog],
      imports: [RouterTestingModule, MatDialogModule],
      declarations: [
        AppComponent,
        NavBarComponent,
        PageContentComponent,
        FooterComponent,
        GameRollComponent,
        GameScoreComponent,
        PopUpComponent,
      ],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  /*  it(`should have as title 'my-angular-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-angular-app');
  }); */

  /*  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'my-angular-app app is running!'
    );
  }); */
});
