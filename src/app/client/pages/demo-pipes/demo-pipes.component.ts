import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-pipes',
  templateUrl: './demo-pipes.component.html',
  styleUrls: ['./demo-pipes.component.scss']
})
export class DemoPipesComponent implements OnInit {
  date = '2021-09-01T00:00:00';
  content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur officia, veniam ipsam hic molestiae odio accusantium soluta sequi nostrum cumque.';

  constructor() { }

  ngOnInit(): void {
  }

}
