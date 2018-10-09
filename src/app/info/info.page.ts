import { Component } from '@angular/core';
import {KeycloakService} from '../services/keycloak.service';

@Component({
  selector: 'app-info',
  templateUrl: 'info.page.html',
  styleUrls: ['info.page.scss']
})
export class InfoPage {

    constructor(private keycloak: KeycloakService) {
        this.keycloak = keycloak;
    }

    /**
     * Redirect to Logout
     */
    logout(): void {
        this.keycloak.logout();
    }
}
