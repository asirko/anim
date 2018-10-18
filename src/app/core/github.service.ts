import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { combineLatest, Observable } from 'rxjs';

export class ComponentAsMarkdown {
  html: string;
  htmlUrl: string;
  ts: string;
  tsUrl: string;
}

class GithubFile {
  content: string;
  html_url: string;
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(
    private http: HttpClient,
  ) { }

  getComponent(slug: string): Observable<ComponentAsMarkdown> {
    const template$ = this.getFileContentAsMarkdown(slug, 'html');
    const controller$ = this.getFileContentAsMarkdown(slug, 'ts');
    return combineLatest(template$, controller$).pipe(
      map(([template, controller]) => {
        return {
          html: turnToMarkdown(template.content, 'html'),
          htmlUrl: template.html_url,
          ts: turnToMarkdown(controller.content, 'typescript'),
          tsUrl: controller.html_url,
        };
      }),
    );
  }

  private getFileContentAsMarkdown(slug: string, extension: string): Observable<GithubFile> {
    return this.http.get<GithubFile>('https://api.github.com/repos/asirko/anim/contents' +
                                     `/src/app/core/examples/${slug}/${slug}-demo/${slug}-demo.component.${extension}`);
  }
}

function turnToMarkdown(content64: string, language: string): string {
  return '```' + language + '\n' + atob(content64) + '\n```';
}
