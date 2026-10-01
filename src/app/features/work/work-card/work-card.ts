import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { WorkItem } from '../../../core/models/portfolio.models';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.html',
  styleUrl: './work-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkCard {
  readonly item = input.required<WorkItem>();
}
