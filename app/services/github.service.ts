import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username:String;
    private client_id = "d17750b02ad4bcddaa24";
    private client_secret = "9b310d84ff4890a22782df9f0fbc5f8a6d98bc09";

    constructor(private _http:Http) {
        console.log("Github Service Ready...");
        this.username = 'bradtraversy';
    }

    getUser() {
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
    }

    getRepos() {
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
    }

    updateUser(inputUsername:String) {
        this.username = inputUsername;
    } 
}