import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  constructor(private router: Router, ) { }

  ngOnInit() {
  }


  goHome = () => {
    this.router.navigate(['/app-home']);
  }

  goEssay = () => {
    this.router.navigate(['/app-essay']);
  }

  goTag = () => {
    this.router.navigate(['/app-tag']);
  }

}
