import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social-icons-tray',
  templateUrl: './social-icons-tray.layout.html',
  styleUrls: ['./social-icons-tray.layout.scss']
})
export class SocialIconsTray {

  @Input()
  src: string;

}
