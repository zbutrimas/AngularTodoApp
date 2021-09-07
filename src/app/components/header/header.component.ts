import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <nav class="navbar navbar-expand-xl navbar-dark static-top bg-dark">
        <div class="container-fluid">
        <a class="navbar-brand mx-3">Todo apps navbar</a>
        <button class="navbar-toggler" type="button"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li [routerLinkActive]="['active']" class="nav-item">
              <a class="nav-link" [routerLink]="['/home']">Home</a>
            </li>
            <li [routerLinkActive]="['active']" class="nav-item">
              <a class="nav-link" [routerLink]="['/todoapps']">Todo apps</a>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    </header>`,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
