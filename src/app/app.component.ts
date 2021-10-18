import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { Repository } from './class/repository';
import { ShowProfileService } from './service/show-profile.service';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitSearch';
  

  userProfile: any;
  repos: any;
  username!: string;
  notFound = false;

  repo: Repository[] = [
     new Repository('Watch finding Nemo', 'Find an online vers', 'http://', new Date(29, 10, 2002)),
     new Repository('Watch finding Nemo', 'Find an online vers', 'http://', new Date(29, 10, 2002)),
     new Repository('Watch finding Nemo', 'Find an online vers', 'http://', new Date(29, 10, 2002)),

  ];
  ngOnInit() {
  }

}
