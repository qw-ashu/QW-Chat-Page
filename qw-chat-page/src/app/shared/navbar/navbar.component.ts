import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'qw-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navToggle = false;
  navIcon = 'bars';
  showNavbarShadow = false;
  navLinks: {
    name: string;
    link: string;
    type: 'link' | 'button';
    fragmentId?: string;
  }[] = [
    {
      name: 'About us',
      link: '/automations',
      fragmentId: 'about-us',
      type: 'link'
    },
    {
      name: 'Features',
      link: null,
      fragmentId: 'features',
      type: 'link'
    },
    {
      name: 'Benefits',
      link: '/pricing',
      fragmentId: 'benefits',
      type: 'link'
    },
    {
      name: 'Case Studies',
      link: null,
      fragmentId: 'case-studies',
      type: 'link'
    },
    // {
    //   name: 'Demo',
    //   link: '/product/app-directory',
    //   fragmentId: 'demo',
    //   type: 'link'
    // },
    {
      name: 'Login',
      link: '/product/features',
      type: 'button'
    }
  ];

  constructor(private appService: AppService) { }

  ngOnInit() {
    window.onscroll = (event => {
      // tslint:disable-next-line: no-string-literal
      this.showNavbarShadow = event.target['scrollingElement'].scrollTop > 30;
    });
  }

  toggleNav() {
    this.navToggle = !this.navToggle;
    this.navIcon = !this.navToggle ? 'bars' : 'times';
  }

  redirectTQWChat() {
    this.appService.redirectToQWChat();
  }

}
