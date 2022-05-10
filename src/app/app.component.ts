import { Component, OnInit } from '@angular/core';

// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { //implements OnInit{
  title = 'sherlock-type';

  ngOnInit(): void {
    const target = document.querySelector('.tw');
    const writer = new Typewriter(target, {
      loop: true,
      typeColor : '#ffffff'
    });
    
    writer
      .type('LearderBoard')
      .rest(1000)
      .remove(12)
      .type('Sup Masterclass ?')
      .rest(1000)
      .remove(17)
      .type('LearderBoard')
      .rest(2000)
      .remove(12)
      .type('Eh bah alors ...')
      .rest(1000)
      .remove(16)
      .type('LearderBoard')
      .start()
  }
}
