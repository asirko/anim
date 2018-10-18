import { Component, Input, OnInit } from '@angular/core';
import { ComponentAsMarkdown, GithubService } from '../../github.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  @Input() description: string;
  @Input() coreIdea: string;
  @Input() slug: string;

  code$: Observable<ComponentAsMarkdown>;

  constructor(
    private gh: GithubService,
  ) { }

  ngOnInit() {
    this.code$ = this.gh.getComponent(this.slug);
  }

}
