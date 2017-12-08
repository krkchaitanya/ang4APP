import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";


import { AppComponent } from './app.component';
import {ServerComponent} from "./server/server.component";
import { ServerItemComponent } from './server-item/server-item.component';
import { NewServerService} from "./new-server.service";
import { InternalFormsSharedModule } from '@angular/forms/src/directives';
import { HumanComponent } from './human/human.component';
import {BasicHighlightDirective} from "./basic-highlight.directive";
import {ColorItDirective} from "./colorit/colorit.directive";
import { AngformComponent } from './angform/angform.component';




@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServerItemComponent,
    HumanComponent,
    BasicHighlightDirective,
    ColorItDirective,
    AngformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule
  ],
  providers: [NewServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
