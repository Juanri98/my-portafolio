import { Component, Input } from '@angular/core';
import { TimelineEvent } from '../../shared/models/timeline-event.model';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent {
  @Input() timeline: TimelineEvent[] | undefined;
}
