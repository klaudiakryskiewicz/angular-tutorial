import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: 'servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreatinStatus = 'No server was created!'
  serverName = 'TestServer';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreatinStatus = 'Server was created! Name is ' + this.serverName;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;

  }

  ngOnInit(): void {
  }

}
