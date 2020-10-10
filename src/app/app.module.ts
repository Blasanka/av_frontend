import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmEqualValidatorDirective } from './shared/conferm-equal-validator.directive';
import { CustomerAccountComponent } from './customer-account/customer-account.component';
import { CustomerAccountAccountDetailsComponent } from './customer-account-account-details/customer-account-account-details.component';
import { CustomerAccountPaymentOptionsComponent } from './customer-account-payment-options/customer-account-payment-options.component';
import { CustomerAccountReviewsComponent } from './customer-account-reviews/customer-account-reviews.component';
import { CustomerAccountWishlistComponent } from './customer-account-wishlist/customer-account-wishlist.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShopComponent } from './shop/shop.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';

import { CartItemsService } from './service/cart-items.service';
import { ItemComponent } from './item/item.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CartItemComponent } from './shopping-cart/cart-item/cart-item.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {SimpleNotificationsModule } from 'angular2-notifications';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { WishlistCartComponent } from './wishlist-cart/wishlist-cart.component';
import { DirectInquiryComponent } from './direct-inquiry/direct-inquiry.component';
import { InquiryCartComponent } from './inquiry-cart/inquiry-cart.component';
import { InquiryCartViewComponent } from './inquiry-cart-view/inquiry-cart-view.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AllProductComponent } from './all-product/all-product.component';
import { InqueryCheckoutComponent } from './inquery-checkout/inquery-checkout.component';
import { HomeImageSliderComponent } from './components/shared/home-image-slider/home-image-slider.component';
import { CategoryComponent } from './template/category/category.component';
import { SearchMainCategoryComponent } from './template/search-main-category/search-main-category.component';
import { SearchListViewComponent } from './template/search-list-view/search-list-view.component';
import { SearchLoadingComponent } from './template/search-loading/search-loading.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    ConfirmEqualValidatorDirective,
    CustomerAccountComponent,
    CustomerAccountAccountDetailsComponent,
    CustomerAccountPaymentOptionsComponent,
    CustomerAccountReviewsComponent,
    CustomerAccountWishlistComponent,
    PrivacyPolicyComponent,
    CartComponent,
    CheckoutComponent,
    ShopComponent,
    FeaturedProductsComponent,
    ItemComponent,
    ShoppingCartComponent,
    CartItemComponent,
    ProductDetailComponent,
    WishlistCartComponent,
    DirectInquiryComponent,
    InquiryCartComponent,
    InquiryCartViewComponent,
    AllProductComponent,
    InqueryCheckoutComponent,
    HomeImageSliderComponent,
    CategoryComponent,
    SearchMainCategoryComponent,
    SearchListViewComponent,
    SearchLoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    CarouselModule,
  ],
  providers: [CartItemsService],
  bootstrap: [AppComponent],
  entryComponents: [HomeImageSliderComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const slider = createCustomElement(HomeImageSliderComponent, { injector });
    customElements.define('motley-slider', slider);
  }

  ngDoBootstrap() {}
}
