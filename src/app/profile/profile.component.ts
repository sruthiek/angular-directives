import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  tablebtn: boolean = false;
  


   
  public employees: any[] = [
    {
      "id": 1,
      "FirstName": "Mark",
      "LastName": "Otto",
      "Address": "punathil house"
    },

    {
      "id": 2,
      "FirstName": "Jacob",
      "LastName": "Thornton",
      "Address": "mavullathil"
    },

    {
      "id": 3,
      "FirstName": "John",
      "LastName": "philip",
      "Address": "amazing villa"
    },

    {
      "id": 4,
      "FirstName": "Larry",
      "LastName": "idikula",
      "Address": "winter john"
    }
  ];



  table: any = {
    tablestyling: {'color':'blue','border':'black'}, 
 
   
  };

  btncollapse() {
    this.tablebtn = !this.tablebtn
  }

 
  changestyles(){
this.table.tablestyling={'color':'red','border':'none','background-color':'#808080'}
  }

}
