import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.scss'],
})
export class SkillBarComponent {
  @Input() title!: string;
  @Input() skills!: { name: string; percentage: number }[];
  @Input() icon!: string;
}
