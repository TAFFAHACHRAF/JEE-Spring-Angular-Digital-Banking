import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashboardComponent implements OnInit{
  public currentPath = this.router.url

  constructor(private router:Router){
  }

  ngOnInit(): void {

  }
}
