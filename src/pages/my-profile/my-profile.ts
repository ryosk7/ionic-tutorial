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

  toggled: boolean = false;
  message: string;

  handleSelection(event) {
    this.message += event.char;
  }
}
