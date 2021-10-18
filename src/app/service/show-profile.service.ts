import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../class/user';
import { Repository } from '../class/repository';


@Injectable({
  providedIn: 'root'
})
export class ShowProfileService {

  user: User;
  repo: Repository;
  username!: string;

  constructor(private http: HttpClient) {
    this.user = new User("", "", 0, 0, "", "", "", new Date())
    this.repo = new Repository("", "", "", new Date())
  }
  private token = environment.token;
  private clientId = environment.clientId;
  private clientSecret = environment.clientSecret;

  getProfileData(username: string) {
    return this.http.get(
      `https://api.github.com/users/${username}?${this.clientId}&client_secret=${this.clientSecret}`
    );
  }
  getRepoData(username: string) {
    return this.http.get(
      `https://api.github.com/users/${username}/repos?${this.clientId}&client_secret=${this.clientSecret}`
    );
  }
  findUser(username: string) {
    interface ApiResponse {
      login: string
      avatar_url: string,
      followers: number,
      following: number,
      repos_url: string,
      bio: string,
      location: string,
      created_at: Date

      name: string
      description: string,
      html_url: string,
      updated_at: Date
    }
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<ApiResponse>(`https://api.github.com/users/${username}?`)
        .toPromise().then(response => {
          this.user.login = response.login
          this.user.avatar_url = response.avatar_url
          this.user.followers = response.followers
          this.user.following = response.following
          this.user.repos_url = response.repos_url
          this.user.bio = response.bio
          this.user.location = response.location
          this.user.created_at = response.created_at
          resolve()
        },
          error => {
            reject(error)
          })

      this.http.get<ApiResponse>(`https://api.github.com/users/${username}/repos`)
        .toPromise().then(response => {
          this.repo.name = response.name
          this.repo.description = response.description
          this.repo.html_url = response.html_url
          this.repo.updated_at = response.updated_at
          resolve()
        },
          error => {
            reject(error)
          })

    })
    return promise

  }

  updateFields(username: string) {
    this.username = username;
  }
}