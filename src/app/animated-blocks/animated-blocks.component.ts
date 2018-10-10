import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'px-animated-blocks',
  templateUrl: './animated-blocks.component.html',
  styleUrls: ['./animated-blocks.component.scss'],
})
export class AnimatedBlocksComponent implements OnInit {

  name = 'Nikola Jeremić';
  position = 'Web developer';
  phone = '(+381) 69 1987 018';
  mail = 'nikola87kg@gmail.com';
  constructor() { }

  ngOnInit() {
    setInterval( () => {
      this.changeData();
    }, 5000);
  }

  changeData() {
      if (this.name === 'Kristina Jeremić') {
        this.name = 'Nikola Jeremić';
        this.position = 'Web developer';
        this.phone = '(+381) 69 1987 018';
        this.mail = 'nikola87kg@gmail.com';
      } else {
        this.name = 'Kristina Jeremić';
        this.position = 'Content Writer & Web Designer';
        this.phone = '(+381) 69 534 02 92';
        this.mail = 'zivanovic.v.kristina@gmail.com';
      }
  }

}
