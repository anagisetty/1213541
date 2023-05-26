import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-config',
  template: `
    <div>
      <p>Configuration of github</p>
      <p>{{error}}</p>
    </div>
  `,
  styles: [
    `
      div {
        padding: 10px;
        border: 1px solid #000;
      }
    `
  ]
})
export class GithubConfigComponent implements OnInit {
  error: string;

  constructor() {
    this.error = `'NoneType' object has no attribute 'replace'`;
  }

  ngOnInit() {
  }

}