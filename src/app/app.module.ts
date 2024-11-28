import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAuth0,AuthModule } from '@auth0/auth0-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QueuesComponent } from './Components/queues/queues.component';

@NgModule({
  declarations: [
    AppComponent,
    QueuesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      AuthModule.forRoot({
      domain: 'arne-jaga.auth0.com',  // Replace with your Auth0 domain
      clientId: 'KlON1mwVhR6VejivYgrCAhDEKuleBLtZ',       // Replace with your Auth0 client ID
      authorizationParams: {
        redirect_uri: window.location.origin,
         audience: 'https://ws.nttdata.com/OneGuideAPI'
      },
      
           // Replace with your API audience
    })
  ],
  providers: [
    // provideAuth0({
    //   domain: 'arne-jaga.auth0.com',
    //   clientId: 'KlON1mwVhR6VejivYgrCAhDEKuleBLtZ',
    //   authorizationParams: {
    //     redirect_uri: window.location.origin
    //   },
    //   audience: 'https://your-api',
    // }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
