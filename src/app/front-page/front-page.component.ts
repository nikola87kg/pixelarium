import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'px-front-page',
    templateUrl: './front-page.component.html',
    styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {

    text = 'Želite <b>moderan</b> web sajt <b>?</b>';
    image = './assets/reference/interprint-tablet.png';
    image2 = '';
    textCounter = 1;

    constructor() { }

    ngOnInit() {
        setInterval(() => {
            switch (this.textCounter) {
                case 1:
                    this.text = 'Želite <b>i brzinu i stabilnost ?</b>';
                    this.image = './assets/reference/interprint-desktop.png';
                    this.image2 = '';
                    break;
                case 2:
                    this.text = 'Želite da sajt izgleda lepo <b>na svim uređajima ?</b>';
                    this.image = './assets/reference/interprint-tablet.png';
                    this.image2 = './assets/reference/interprint-mobilni.png';
                    break;
                case 3:
                    this.text = 'Želite naloge na <b>drušvenim mrežama  ?</b>';
                    this.image = './assets/reference/kragujevcanka-facebook.png';
                    this.image2 = './assets/reference/kragujevcanka-instagram.png';
                    break;
                case 4:
                    this.text = 'Želite <b>svakodnevnu podršku ?</b>';
                    this.image = './assets/reference/kragujevcanka-mobilni.png';
                    this.image2 = './assets/reference/interprint-mobilni.png';
                    break;
                case 5:
                    this.text = 'Vi želite... <b>PIXELARIUM.rs</b>';
                    this.image = './assets/reference/kragujevcanka-desktop.png';
                    this.image2 = '';
                    break;
                case 6:
                    this.text = 'Želite <b>moderan</b> web sajt <b>?</b>';
                    this.image = './assets/reference/interprint-mobilni.png';
                    this.image2 = './assets/reference/kragujevcanka-mobilni.png';
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
