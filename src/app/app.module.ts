import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserService } from './services/user.service';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BuiltInStrDirComponent } from './built-in-str-dir/built-in-str-dir.component';
import { BuiltInAttrDirComponent } from './built-in-attr-dir/built-in-attr-dir.component';
import { ChangeCaseDirective } from './change-case.directive';
import { DirectiveHostComponent } from './directive-host/directive-host.component';
import { UnlessDirective } from './unless.directive';
import { ParentComponent } from './parent/parent.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, CommonModule ],
  declarations: [ AppComponent, HelloComponent, UserListComponent, UserDetailComponent, BuiltInStrDirComponent, BuiltInAttrDirComponent, ChangeCaseDirective, DirectiveHostComponent, UnlessDirective, ParentComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ UserService ]
})
export class AppModule { }
