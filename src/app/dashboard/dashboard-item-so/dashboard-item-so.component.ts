import { Component, Input, OnInit } from '@angular/core';
import { Question } from '@userscripters/stackexchange-api-types/lib/types';

@Component({
  selector: 'app-dashboard-item-so',
  templateUrl: './dashboard-item-so.component.html',
  styleUrls: ['./dashboard-item-so.component.scss']
})
export class DashboardItemSoComponent implements OnInit {

  @Input() item?: Question;

  constructor() { }

  ngOnInit(): void {
  }

  get votes(): number {
    if (!this.item?.up_vote_count || !this.item.down_vote_count) {
      return 0;
    }
    return this.item.up_vote_count - this.item.down_vote_count;
  }
}
