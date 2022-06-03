import { Component, Input, OnInit } from '@angular/core';

export interface RepositoryName {
  name: string,
  description: string,
  fork: number,
  favorites: number
}

@Component({
  selector: 'app-repository-name',
  templateUrl: './repository-name.component.html',
  styleUrls: ['./repository-name.component.scss']
})
export class RepositoryNameComponent implements OnInit {

  @Input() dataRepository: RepositoryName;

  constructor() { }

  ngOnInit(): void {
  }

}
