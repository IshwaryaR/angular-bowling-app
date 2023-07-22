import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageContentComponent } from './page-content.component';
import { RouterTestingModule } from '@angular/router/testing';
import {
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { provideMockStore } from '@ngrx/store/testing';
import { GameRollComponent } from './game-roll/game-roll.component';
import { GameScoreComponent } from './game-score/game-score.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
describe('PageContentComponent', () => {
  let component: PageContentComponent;
  let fixture: ComponentFixture<PageContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageContentComponent,
        GameRollComponent,
        GameScoreComponent,
      ],
      providers: [provideMockStore({})],
      imports: [
        RouterTestingModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    });
    fixture = TestBed.createComponent(PageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
