import { Component, OnInit } from '@angular/core';
import { Repository } from '../../class/repository';
import { ShowProfileService } from '../../service/show-profile.service';
import { UserService } from '../../service/user.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
    [x: string]: any;
    username: string = 'simonkairu'
    // repo = [];

    

    constructor(private service: UserService) {
    }

    ngOnInit() {
        this.service.showMyData(this.username);
        this.usr = this.service.user;
        this.service.showMyRepo(this.username);
        this.repo = this.service.repo;
        document.body.className = "selector";

    }

   
 
    ngOnDestroy(){
        document.body.className="";
      }
}


