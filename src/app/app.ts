import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SiteHeader } from './layout/site-header/site-header';
import { SiteFooter } from './layout/site-footer/site-footer';
import { Hero } from './features/hero/hero';
import { Work } from './features/work/work';
import { About } from './features/about/about';
import { Contact } from './features/contact/contact';

@Component({
  selector: 'app-root',
  imports: [SiteHeader, Hero, Work, About, Contact, SiteFooter],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
