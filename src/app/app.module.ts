import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ApproachComponent } from './approach/approach.component';
import { AdvantagersComponent } from './advantagers/advantagers.component';
import { StartComponent } from './start/start.component';
import { TabsComponent } from './tabs/tabs.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { VideoTourComponent } from './video-tour/video-tour.component';
import { PlanChooserComponent } from './plan-chooser/plan-chooser.component';
import { CommercialComponent } from './commercial/commercial.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ApproachComponent,
    AdvantagersComponent,
    StartComponent,
    TabsComponent,
    ReviewsComponent,
    VideoTourComponent,
    PlanChooserComponent,
    CommercialComponent,
    FooterComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
