import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './shop/details/details.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { FirebaseService } from './services/firebase.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // { path: '', redirectTo: 'register', pathMatch:'full' },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'shop/details/:id', component:DetailsComponent  },
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch:'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    AboutComponent,
    ShopComponent,
    HomeComponent,
    DetailsComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAXKy0IzA4cI2V73kvn9b6iDDAB4VaftWU",
      authDomain: "angularauth-c9195.firebaseapp.com",
      projectId: "angularauth-c9195",
      storageBucket: "angularauth-c9195.appspot.com",
      messagingSenderId: "1037652929704",
      appId: "1:1037652929704:web:a6db55888e09a588dea69d"
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
