import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

const oAuthConfig: AuthConfig={
  issuer:'https://accounts.google.com',
  strictDiscoveryDocumentValidation:false,
  redirectUri:window.location.origin,
  clientId:'1037341811704-6prmlf73gn3aoio1vmfkqlkqfe6d35ao.apps.googleusercontent.com',
  scope:'openid pofile emial'
}


@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {

  constructor(private readonly oAuthService:OAuthService ) {
    oAuthService.configure(oAuthConfig)
    oAuthService.loadDiscoveryDocument().then(() =>{
      oAuthService.tryLoginImplicitFlow().then(()=>{
        if(!oAuthService.hasValidAccessToken()){
          oAuthService.initLoginFlow()
        }else{
          oAuthService.loadUserProfile().then( (userProfile) =>{
            console.log(JSON.stringify(userProfile))
          })
        }
      })
    })
   }
}
