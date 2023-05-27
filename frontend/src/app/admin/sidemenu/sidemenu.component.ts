import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/_services/token.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit{
  constructor(private tokenService : TokenService){
    
  }
  
  logout(): void{
    this.tokenService.logOut()
  }

  ngOnInit(): void {
    
  }
}


