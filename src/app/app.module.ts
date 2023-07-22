import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PinbowlComponent } from './pinbowl/pinbowl.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageContentComponent } from './page-content/page-content.component';
import { FooterComponent } from './footer/footer.component';
import { GameRollComponent } from './page-content/game-roll/game-roll.component';
import { PinBowlService } from './pin-bowl.service';
import { GameScoreComponent } from './page-content/game-score/game-score.component';
import { StoreModule } from '@ngrx/store';
import { rollReducer } from './page-content/state/roll.reducer';
import { MatDialogModule } from '@angular/material/dialog';
import { counterReducer } from './page-content/state/framecount.reducer';
import { scoreReducer } from './page-content/state/totalscore.reducer';
@NgModule({
  declarations: [
    AppComponent,
    PinbowlComponent,
    NavBarComponent,
    PageContentComponent,
    FooterComponent,
    GameRollComponent,
    GameScoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      posts: rollReducer,
      framecount: counterReducer,
      totalscore: scoreReducer,
    }),
    MatDialogModule,
  ],
  providers: [PinBowlService],
  bootstrap: [AppComponent],
})
export class AppModule {}
