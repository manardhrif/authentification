import { Component } from '@angular/core';
import { Role } from '../enum/role.enum';
import { NotificationService } from '../service/notification.service';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {





  constructor(  private authenticationService :AuthenticationService   ){}

  public get isAdmin(): boolean {
    return this.getUserRole() === Role.ADMIN ||  this.getUserRole() === Role.SUPER_ADMIN;  ;
   }

   public get isManager(): boolean {
    return this.isAdmin||  this.getUserRole() === Role.MANAGER;
   }

   public get isAdminOrManager():boolean {
    return this.isAdmin || this.isManager;
   }


   private getUserRole():string {
    return this.authenticationService.getUserFromLocalCache().role;
  }
}
