import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EXPERIENCE, PROFILE, SKILLS } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  protected readonly name = PROFILE.name;
  protected readonly skills = SKILLS;
  protected readonly experience = EXPERIENCE;
}
