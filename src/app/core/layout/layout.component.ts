import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { navigationTransition, routerTransition } from './router-animation';
import { indexOf } from '../../shared/utils/dom-utils';
import { NavigationEnd, Router } from '@angular/router';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [ routerTransition, navigationTransition ],
})
export class LayoutComponent implements OnInit, AfterViewInit {

  state: any;
  @ViewChildren('link') links: QueryList<ElementRef>;

  constructor(
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      tap(() => this.updateState()),
    ).subscribe();
  }

  ngAfterViewInit(): void {
    this.updateState();
    this.changeDetectorRef.detectChanges();
  }

  private updateState() {
    const selectedLink: HTMLAnchorElement = this.links.find(({nativeElement: link}: {nativeElement: HTMLAnchorElement}) => {
      return link.getAttribute('routerLink') === this.router.url;
    }).nativeElement;

    const offsetX = this.links.first.nativeElement.getBoundingClientRect().x;
    const translateX = selectedLink.getBoundingClientRect()['x'] - offsetX;
    const index = indexOf(selectedLink);

    this.state = {
      value: index,
      params: {
        width: selectedLink.offsetWidth,
        height: selectedLink.offsetHeight,
        translateX,
        direction: !this.state || this.state.value < index ? 1 : -1,
      }
    };
  }

}
