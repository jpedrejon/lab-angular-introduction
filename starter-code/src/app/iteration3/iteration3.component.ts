import { Component } from '@angular/core';

@Component({
  selector: 'app-iteration3',
  templateUrl: './iteration3.component.html',
  styleUrls: ['./iteration3.component.css']
})
export class Iteration3Component {
  champions: Array<Object> = [
    {
      year: "2015 - 2016",
      team: "Cleveland Cavaliers",
      src: 'assets/nba1.jpeg',
      players: ['Lebron James', 'Kyrie Irving', 'Kevin Love', 'J.R. Smith', 'Andersion Verajao']
    }, {
      year: "2014 - 2015",
      team: "Golden State",
      src: 'assets/nba2.jpeg',
      players: ['Stephen Curry', 'Klay Thompson', 'Draymong Green', 'Andrew bogut','Gestus V.' ]
    },{
      year: "2013 - 2014",
      team: "San Antonio",
      src: 'assets/nba3.jpeg',
      players: ['Tim Duncan', 'Tony Parker', 'Manu Ginóbili', 'Tiago Splitter']
    }
  ]

}
