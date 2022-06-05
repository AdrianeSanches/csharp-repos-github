import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { GithubService } from 'src/app/core/services/github.service';
import { Profile } from 'src/app/shared/components/profile/profile.component';
import { RepositoryName } from 'src/app/shared/components/repository-name/repository-name.component';

export interface Home {
  dadosRepositorio: RepositoryName;
  dadosPerfil: Profile;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  arrayHome: Home[] = [];

  constructor( private _githubService: GithubService, private _router: Router ) {}

  ngOnInit(): void {
    this._githubService.obterRepositorios().subscribe(
      (dados: any) => {
        dados.items.forEach((item) => {
          let dadosFormatados: Home = {
            dadosRepositorio: {
              name: item.name,
              description: item.description,
              fork: item.forks_count,
              favorites: item.stargazers_count,
            },
            dadosPerfil: {
              image: item.owner.avatar_url,
              userName: item.owner.login,
            }
          };
          this.arrayHome.push(dadosFormatados);
        })
        console.log(this.arrayHome);
      }
    );
  }

  navigatePullRequest() {
    this._router.navigate(['/pullRequest']);
  }
}
