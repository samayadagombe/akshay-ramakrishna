import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTACT_ITEMS, PROFILE } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  protected readonly items = CONTACT_ITEMS;
  protected readonly mailto = `mailto:${PROFILE.email}`;

  protected isExternal(href: string): boolean {
    return href.startsWith('http');
  }
}
