import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <nav class="navbar navbar-expand-md navbar-dark static-top bg-dark">
        <a class="navbar-brand mx-3">Fixed navbar</a>
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
              <a class="nav-link" [routerLink]="['/todoapps']">Todoapps</a>
            </li>
          </ul>
          <!--          <form class="form-inline mt-2 mt-md-0">-->
          <!--            <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">-->
          <!--            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>-->
          <!--          </form>-->
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
