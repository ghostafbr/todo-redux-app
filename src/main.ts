import {enableProdMode, importProvidersFrom} from '@angular/core';
import { environment } from './environments/environment';
import {bootstrapApplication} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from "./app/app.component";
import {StoreModule} from "@ngrx/store";
import {todoReducer} from "./app/todos/todo.reducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule,
      // RouterModule.forRoot(AppRouting, {useHash: true}),
      StoreModule.forRoot({ todos: todoReducer }),
      StoreDevtoolsModule.instrument({
        maxAge: 25, // Retains last 25 states
        logOnly: environment.production, // Restrict extension to log-only mode
        // autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      }),
    ),
  ],
}).catch( err => console.error(err));
