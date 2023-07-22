import { Component, OnInit } from '@angular/core';
import { PinBowlService } from '../pin-bowl.service';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.sass'],
})
export class PageContentComponent implements OnInit {
  constructor(
    private _myService: PinBowlService,
    private store: Store<AppState>
  ) {}
  totalscore: number | undefined;
  getTotalScore() {
    return this._myService.getTotalScore();
  }

  ngOnInit() {
    this.store
      .select('totalscore')
      .subscribe((data) => (this.totalscore = data.totalscore));
  }
}
