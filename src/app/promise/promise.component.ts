import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss'],
})
export class PromiseComponent implements OnInit {
  constructor() {}

  dell = { brand: 'Dell', hardDisk: '2 TB', color: 'Black' };

  hp = { brand: 'HP', hardDisk: '1 TB', color: 'Grey' };

  notAvil = { brand: 'Not Available', status: 'Failed' };

  promiseVal: any;

  dellAvailable() {
    return true;
  }

  hpAvailable() {
    return false;
  }

  ngOnInit(): void {
    let buyLaptop = new Promise((resolve, reject) => {
      if (this.dellAvailable()) {
        return setTimeout(() => resolve(this.dell), 2000);
      } else if (this.hpAvailable()) {
        return setTimeout(() => resolve(this.hp), 2000);
      } else {
        return setTimeout(() => reject(this.notAvil), 2000);
      }
    });

    buyLaptop
      .then((res) => {
        this.promiseVal = JSON.stringify(res);
        console.log(res);
      })
      .catch((res) => {
        this.promiseVal = JSON.stringify(res.brand);
        console.log(res);
      });
  }
}
