import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'px-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {

  text = 'Želite <b>moderan</b> web sajt <b>?</b>';
  textCounter = 1;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      switch (this.textCounter) {
      case 1:
          this.text = 'Želite <b>i brzinu i stabilnost ?</b>';
          break;
      case 2:
          this.text = 'Želite da sajt izgleda lepo <b>na svim uređajima ?</b>';
          break;
      case 3:
          this.text = 'Želite naloge na <b>drušvenim mrežama  ?</b>';
      break;
      case 4:
          this.text = 'Želite <b>svakodnevnu podršku ?</b>';
      break;
      case 5:
          this.text = 'Vi želite... <b>PIXELARIUM.rs</b>';
      break;
      case 6:
          this.text = 'Želite <b>moderan</b> web sajt <b>?</b>';
      break;
  }
      if (this.textCounter < 6) {
        this.textCounter++;
      } else {
        this.textCounter = 1;
      }
    }, 3000);
  }



}
