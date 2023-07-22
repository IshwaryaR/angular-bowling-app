import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameRollComponent } from './game-roll.component';
import { provideMockStore } from '@ngrx/store/testing';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('GameRollComponent', () => {
  let component: GameRollComponent;
  let fixture: ComponentFixture<GameRollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameRollComponent],
      providers: [provideMockStore({}), MatDialog],
      imports: [
        RouterTestingModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    });
    fixture = TestBed.createComponent(GameRollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
