import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopUpComponent } from './pop-up.component';
import { RouterTestingModule } from '@angular/router/testing';
import {
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

describe('PopUpComponent', () => {
  let component: PopUpComponent;
  let fixture: ComponentFixture<PopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
      imports: [RouterTestingModule, MatDialogModule],
    });
    fixture = TestBed.createComponent(PopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render footer', () => {
    const fixture = TestBed.createComponent(PopUpComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector('.confirm-container h3')?.textContent
    ).toContain('Game Over! Well done!');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
