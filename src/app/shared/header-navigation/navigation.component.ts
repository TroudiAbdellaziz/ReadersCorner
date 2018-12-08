import { Component, AfterViewInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from '../../services/cart.service'
@Component({
  selector: 'ap-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements AfterViewInit {

  name: string;
  showHide: boolean;
  public isConnected: Boolean
  public connect: Boolean = false;
  public price: string = "0";
  constructor(private cartService: CartService) {
    this.isConnected = localStorage.getItem("user") != null;
    if (this.isConnected){
    this.price=localStorage.getItem("price");}
    else 
    {
      localStorage.setItem("price","0");
    }
    this.showHide = true;
  }

  changeShowStatus() {
    this.showHide = !this.showHide;
  }
  changed(ch: boolean) {
    this.isConnected = true;
    console.log("changed");
  }
  ngOnInit() {
    this.cartService.change.subscribe(object => {
    this.price = (parseInt(localStorage.getItem("price")) + parseInt(object.price)).toString();
      console.log(this.price);
      localStorage.setItem("price", this.price);
      if(object.id){
      if (localStorage.getItem("orders")){
        localStorage.setItem("orders",localStorage.getItem("orders")+":"+object.id);
      }else {
        localStorage.setItem("orders",object.id);
      }}
    });
    this.cartService.notification.subscribe(object =>{
      console.log("here");
      $('loginLi').data('toggle');
    });
  }
  changed2(ch: boolean) {
    this.isConnected = true;
  }
  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("price");
    this.price = "0";
    localStorage.setItem("price", "0");
    localStorage.removeItem("orders");
    this.isConnected = false;
  }
  ngAfterViewInit() {


    $(function () {
      $('.preloader').fadeOut();
    });

    const set = function () {
      const width =
        window.innerWidth > 0 ? window.innerWidth : this.screen.width;
      const topOffset = 60;
      if (width < 1170) {
        $('body').addClass('mini-sidebar');
        $('.navbar-brand span').hide();
        $('.scroll-sidebar, .slimScrollDiv')
          .css('overflow-x', 'visible')
          .parent()
          .css('overflow', 'visible');
        $('.sidebartoggler i').addClass('ti-menu');
      } else {
        $('body').removeClass('mini-sidebar');
        $('.navbar-brand span').show();
        $('.sidebartoggler i').removeClass('ti-menu');
      }

      var height =
        (window.innerHeight > 0 ? window.innerHeight : this.screen.height) - 1;
      height = height - topOffset;
      if (height < 1) height = 1;
      if (height > topOffset) {
        $('.page-wrapper').css('min-height', height + 'px');
      }
    };
    $(window).ready(set);
    $(window).on('resize', set);

    $(document).on('click', '.mega-dropdown', function (e) {
      e.stopPropagation();
    });

    $('.search-box a, .search-box .app-search .srh-btn').on(
      'click',
      function () {
        $('.app-search').toggle(200);
      }
    );

    /*(<any>$('.scroll-sidebar, .right-sidebar, .message-center')).perfectScrollbar();*/

    (<any>$('.scroll-sidebar')).slimScroll({
      position: 'left',
      size: '5px',
      height: '100%',
      color: '#dcdcdc'
    });

    (<any>$('.right-sidebar')).slimScroll({
      height: '100%',
      position: 'right',
      size: '5px',
      color: '#dcdcdc'
    });

    (<any>$('.message-center')).slimScroll({
      position: 'right',
      size: '5px',
      color: '#dcdcdc'
    });

    $('body').trigger('resize');
  }
}
