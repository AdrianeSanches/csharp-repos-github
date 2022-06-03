import { Component, Input, OnInit } from '@angular/core';

//criando uma interface
export interface Profile {
  image: string,
  userName: string
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  //pegando os dados do componente pai pelo Input e tipando ele com a interface
  @Input() dataProfile: Profile;

  constructor() { }

  ngOnInit(): void {
  }

}
