import { Component } from '@angular/core';
const max_range=300

@Component({
  selector: 'app-root',
  // view
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//controller
export class AppComponent {

  //model
  // imageCount = 0;
  isVisible = true;
  imageSources = []

  
  increaseImageCont(){
    const id = this.genarateId();
    this.imageSources.push("https://picsum.photos/id/237/200/300");
  }

  toggle(){
    this.isVisible = !this.isVisible;
  }

  private genarateId(){
    return Math.round(Math.random()*max_range)+1
  }
}
