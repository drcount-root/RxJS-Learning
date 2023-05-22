import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asyncawait',
  templateUrl: './asyncawait.component.html',
  styleUrls: ['./asyncawait.component.scss'],
})
export class AsyncawaitComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data Received!')
      }, 3000)
    })

    async function getData() {
      let response = await promise;
      console.log(response)
    }

    getData()
  }
}
