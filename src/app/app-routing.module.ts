import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { CustomerAccountComponent } from './customer-account/customer-account.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShopComponent } from './shop/shop.component';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { DirectInquiryComponent } from './direct-inquiry/direct-inquiry.component';
import { InquiryCartViewComponent } from './inquiry-cart-view/inquiry-cart-view.component';
import { InqueryCheckoutComponent } from './inquery-checkout/inquery-checkout.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'customeraccount', component: CustomerAccountComponent},
  {path: 'privacypolicy', component: PrivacyPolicyComponent},
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'inquery-checkout', component: InqueryCheckoutComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'inquirycart', component: InquiryCartViewComponent},
  {path: 'product/details/:id', component: ProductDetailComponent},
  {path: 'product/inquiry/:id', component: DirectInquiryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  LoginComponent,
  HomeComponent,
  RegisterComponent,
  CustomerAccountComponent,
  PrivacyPolicyComponent,
  CartComponent,
  CheckoutComponent,
  ShopComponent,
  ProductDetailComponent,
  DirectInquiryComponent,
  InquiryCartViewComponent
]