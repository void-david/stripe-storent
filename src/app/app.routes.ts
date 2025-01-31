import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import {StoreComponent} from './store/store.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'store-component', component: StoreComponent},
    { path: 'dashboard-component', component: DashboardComponent},
    { path: 'profile-component', component: ProfileComponent},
    { path: 'cart-component', component: CartComponent},

    // specific routes go first, general routes last
    // ** route should go last because it matches everything
    { path: '**', component: PageNotFoundComponent}
  ];
