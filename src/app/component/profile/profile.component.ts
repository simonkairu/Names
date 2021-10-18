import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Repository } from '../../class/repository';
import { User } from '../../class/user';
import { ShowProfileService } from '../../service/show-profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // searchQuery! :string;
  [x: string]: any;
  user!: User;
  username!: string;
  repos: any;
  userProfile: any;
  followers: any;
  following: any;



  constructor(private showProfile: ShowProfileService) {
    this.showProfile = showProfile;
    this.usr = this.showProfile.user
    this.repo = this.showProfile.repo;
  }

  search(username: string) {
    this.showProfile.findUser(username);
    this.showProfile.getProfileData(username)
      .subscribe(profile => {
        // console.log(profile)
        this.userProfile = profile;
      }, error => {
        // this.notFound = !this.notFound;
      });
    this.username = '';
    this.showProfile.getRepoData(username)
      .subscribe(repos => {
        this.repos = repos;
        console.log(repos)
      });
  }

  ngOnInit() {
    // username: string = 'simonkairu'
    this.search('simonkairu');

  }

}



