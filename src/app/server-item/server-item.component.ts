import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-server-item',
  templateUrl: './server-item.component.html',
  styleUrls: ['./server-item.component.css']
})
export class ServerItemComponent implements OnInit {

  @Input() servers:any[];
  constructor() { }

  ngOnInit() {
  }

}
