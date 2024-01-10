import { Component } from "@angular/core";


@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [
        `
        .online{
        color: white;
        }
        `
    ]
   
})
export class ServerComponent {
    id=10
    name='sneha'
    serverStatus= 'Offline';

    constructor() {
        this.serverStatus=Math.random()>0.5 ? 'online':'offlline'
    }

    getserverStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus ==='online' ? 'green': 'red'

    }

}