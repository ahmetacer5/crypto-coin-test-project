import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions, ResponseContentType} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';
import {CustomURLSearchParams} from '../CustomURLSearchParams';
import { GlobalVairables } from '../GlobalVairables';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) {
  }

  apihost = environment.apihost;
  apibase = '/auth';

  login(identityno: string, password: string) {
    const body = new CustomURLSearchParams();
    body.set('identityno', identityno);
    body.set('password', GlobalVairables.encryptPw(password));

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(this.apihost + this.apibase + '/authenticate', body.toString(), {headers: headers})
      .map((response: Response) => response.json());
  }

  logout() {
    // remove user from local storage to log user out
    sessionStorage.removeItem('SESSIONID');
  }

  userexist(_identityno: string) {

    const body = new CustomURLSearchParams();
    body.set('identityno', _identityno);

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(this.apihost + this.apibase + '/userexist', body.toString(), {headers: headers})
      .map((response: Response) => response.json());
  }

  getSignupToken(identityno: string) {
    const body = new CustomURLSearchParams();
    body.set('identityno', identityno);

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');


    return this.http.post(this.apihost + this.apibase + '/signupredirect', body.toString(), {headers: headers})
      .map((response: Response) => response.json());
  }

  getCheckSignupToken(signuptoken: string) {
    const body = new CustomURLSearchParams();
    body.set('signuptoken', signuptoken);

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');


    return this.http.post(this.apihost + this.apibase + '/checksignupredirect', body.toString(), {headers: headers})
      .map((response: Response) => response.json());
  }

  yonlendir_check(yonlendirtoken: string) {
    const body = new CustomURLSearchParams();
    body.set('yonlendirtoken', yonlendirtoken);

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');


    return this.http.post(this.apihost + this.apibase + '/yonlendir_check', body.toString(), {headers: headers})
      .map((response: Response) => response.json());
  }


  // apiRoutes.post('/signupandauthenticate', function (req, res) {
  //
  // if (req.body.name && req.body.surname && req.body.email && req.body.password && req.body.identityno) {


  // signupandauthenticate(user: KayitModel) {
  //
  //   const body = new CustomURLSearchParams();
  //   body.set('name', user.adsoyad);
  //   body.set('email', user.email);
  //   body.set('phone', user.telefon);
  //
  //   const key = CryptoJS.enc.Base64.parse(this.privateKey);
  //   const iv  = CryptoJS.enc.Base64.parse('#base64IV#');
  //   const encryptedpw = CryptoJS.AES.encrypt(user.password, key, {iv: iv});
  //
  //
  //   body.set('password', encryptedpw.toString());
  //   body.set('identityno', user.tcno);
  //
  //   const headers = new Headers();
  //   headers.append('Content-Type', 'application/x-www-form-urlencoded');
  //
  //   return this.http.post(this.apihost + this.apibase + '/signupandauthenticate', body.toString(), {headers: headers})
  //     .map((response: Response) => response.json());
  // }

  test_auto_auth(identityno: string) {
    const body = new CustomURLSearchParams();
    body.set('identityno', identityno);

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');


    return this.http.post(this.apihost + this.apibase + '/test_auto_auth', body.toString(), {headers: headers})
      .map((response: Response) => response.json());
  }


}

