import { Component, Input, OnInit } from '@angular/core';
//import { NgFor } from '@angular/common';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  @Input() name!: string;
  @Input() Team!: string;
  @Input() position!: string;
  @Input() college!: string;
  @Input() hometowm!: string;

  constructor() { }

  public playerList: Array<Player> = [
    
  ];

  ngOnInit(): void {
  }

  addPlayer(name: string, Team: string, position: string, college: string, hometowm: string) {
    let player = new Player(name, Team, position, college, hometowm);
    this.playerList.push(player);
    this.clearPlayers();
  }

  clearPlayers() {
    this.name = "";
    this.Team = "";
    this.position = "";
    this.college = "";
    this.hometowm = "";
  }
}

export class Player {
  name!: string;
  Team!: string;
  position!: string;
  college!: string;
  hometowm!: string;

  constructor(name: string, Team: string, position: string, college: string, hometowm: string) {
    this.name = name;
    this.Team = Team;
    this.position = position;
    this.college = college;
    this.hometowm = hometowm;
  }
}