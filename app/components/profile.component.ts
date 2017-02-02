import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({ 
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html',
})
export class ProfileComponent  {
    user = new Array;
    repos = new Array;
    inputUsername: String;
    constructor(private _githubService:GithubService) {}

    searchUser() {
        this._githubService.updateUser(this.inputUsername);

        this._githubService.getUser().subscribe(foundUser => {
            // console.log(foundUser);
            this.user = foundUser;
        })
         this._githubService.getRepos().subscribe(foundRepos => {
            console.log(foundRepos);
            this.repos = foundRepos;
        })
        console.log("It works");
    }
}
