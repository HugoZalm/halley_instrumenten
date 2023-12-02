import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../../shared/material.module';
import { BaseModule } from '../../../shared/base.module';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
  standalone: true,
  imports: [MaterialModule, BaseModule]
})
export class ItemListComponent {

  @Input() items: String[] = [];

}
