import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {KeycloakService} from './app/services/keycloak.service';

if (environment.production) {
  enableProdMode();
}

// Ensure that Keycloak is Initialised before Angular to prevent Redirect looping issues
KeycloakService.init()
    .then(() => {
        const platform = platformBrowserDynamic();
        // Manually initialize angular
        platformBrowserDynamic().bootstrapModule(AppModule)
            .catch(err => console.log(err));
    })
    .catch((err) => console.error('Error initalizing Keycloak', err));

