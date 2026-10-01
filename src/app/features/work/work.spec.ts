import { TestBed } from '@angular/core/testing';
import { Work } from './work';

describe('Work', () => {
  async function setup() {
    await TestBed.configureTestingModule({ imports: [Work] }).compileComponents();
    const fixture = TestBed.createComponent(Work);
    await fixture.whenStable();
    return fixture;
  }

  const cards = (root: HTMLElement) => root.querySelectorAll('app-work-card').length;

  it('shows UI / UX projects by default', async () => {
    const fixture = await setup();
    expect(cards(fixture.nativeElement)).toBe(6);
  });

  it('filters to graphic design projects when selected', async () => {
    const fixture = await setup();
    const root = fixture.nativeElement as HTMLElement;
    const buttons = root.querySelectorAll<HTMLButtonElement>('.work__filter-btn');

    buttons[1].click();
    await fixture.whenStable();

    expect(cards(root)).toBe(5);
    expect(buttons[1].getAttribute('aria-pressed')).toBe('true');
    expect(buttons[0].getAttribute('aria-pressed')).toBe('false');
  });
});
