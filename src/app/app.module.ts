import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { PatientRegistrationComponent } from './components/patient-registration/patient-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CardModule } from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {DataViewModule} from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import {CarouselModule} from 'primeng/carousel';
import {DividerModule} from 'primeng/divider';
import {StepsModule} from 'primeng/steps';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';

const modules = [
  CardModule,
  MenubarModule,
  ButtonModule,
  DataViewModule,
  PanelModule,
  DialogModule,
  DropdownModule,
  InputTextModule,
  RippleModule,
  RatingModule,
  FormsModule,
  CarouselModule,
  DividerModule,
  StepsModule,
  ConfirmDialogModule,
  OrganizationChartModule,
  TableModule,
  TooltipModule
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    PatientRegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    modules,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
