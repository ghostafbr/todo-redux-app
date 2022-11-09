import {enableProdMode, importProvidersFrom} from '@angular/core';
import { environment } from './environments/environment';
import {bootstrapApplication} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from "./app/app.component";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {appReducers} from "./app/app.reducer";
import {FilterPipe} from "./app/todos/filter.pipe";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule,
      // RouterModule.forRoot(AppRouting, {useHash: true}),
      StoreModule.forRoot(appReducers),
      StoreDevtoolsModule.instrument({
        maxAge: 25, // Retains last 25 states
        logOnly: environment.production, // Restrict extension to log-only mode
        // autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      }),
      FilterPipe
    ),
  ]
}).catch( err => console.error(err));
