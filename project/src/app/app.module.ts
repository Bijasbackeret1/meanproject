import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material.model';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserlistComponent } from './userlist/userlist.component';
import { PasswordresetComponent } from './passwordreset/passwordreset.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { MatCardModule } from '@angular/material/card';
import { EditComponent } from './edit/edit.component';
// import {NgIf} from '@angular/common';
//  import {MatInputModule} from '@angular/material/input';
//  import {MatFormFieldModule} from '@angular/material/form-field';

// import {MatIconModule} from '@angular/material/icon';
//  import {MatButtonModule} from '@angular/material/button';
// import {MatToolbarModule} from '@angular/material/toolbar';








@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    UserlistComponent,
    EditComponent,
    PasswordresetComponent,
    AdminpageComponent,
    // NgIf
    // MatInputModule,
    //  MatFormFieldModule,
    // MatIconModule,
    // MatButtonModule,
    //MatToolbarModule

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatCardModule,

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
