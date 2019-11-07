import { Component } from '@angular/core';

@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html'
})
export class MyProfilePage {
  constructor() {
  }
  openWebSite(url) {
    window.open(url, '_system', 'location=yes');
    return false;
  }
}
