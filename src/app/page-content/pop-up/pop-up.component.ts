import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.sass'],
})
export class PopUpComponent {
  totalscore: number | undefined;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.totalscore = data.totalscore;
  }
}
