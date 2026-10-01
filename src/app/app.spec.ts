import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  it('renders the hero headline and all page sections', async () => {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;

    expect(el.querySelector('h1')?.textContent).toContain('that feels');
    for (const id of ['work', 'about', 'contact']) {
      expect(el.querySelector(`#${id}`)).not.toBeNull();
    }
  });
});
