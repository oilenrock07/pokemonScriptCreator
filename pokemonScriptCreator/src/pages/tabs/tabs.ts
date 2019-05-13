import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { ListPage } from '../list/list';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab3Root = ListPage;

  selectedIndex: number = 0;

  constructor(navParams: NavParams) {
    this.selectedIndex = navParams.data.tabIndex || 0;
  }
}
