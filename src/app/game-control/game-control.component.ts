import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  number = 0 ;

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onStartInterval() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.number + 1);
      this.number++;
    }, 1000);
  }

  // tslint:disable-next-line:typedef
    onStopInterval() {
      clearInterval(this.interval);
    }



}
