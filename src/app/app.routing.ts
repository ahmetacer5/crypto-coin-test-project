import {Routes, RouterModule} from '@angular/router';
import {DasboardComponent} from './components/dasboard/dasboard.component';
import { LoginComponent } from './components/auth/login/login.component';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './services/AuthGuard/auth.guard';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SessionExpiredDialogComponent } from './components/auth/session-expired-dialog/session-expired-dialog.component';
import { IndexComponent } from './components/index/index.component';



const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'app', component: MainComponent, canActivate: [AuthGuard]},
  { path: '', component: IndexComponent},
  { path: 'expired', component: SessionExpiredDialogComponent},

  // { path: '',
  //   redirectTo: '/dashboard',
  //   pathMatch: 'full'
  // },
  { path: '**', component: PageNotFoundComponent}


];




export const routing = RouterModule.forRoot(appRoutes, {enableTracing: false} );
