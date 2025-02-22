import { Component,  } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CoursesComponent } from '../courses/courses.component';
import { AboutComponent } from "../about/about.component";
// import { Strings } from '../../enum/strings.enum';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CoursesComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  //  courses: any[] = [];

   constructor(

   ){}

   ngOnInit() {
    console.log('home ngoninit');
    //  this.getCourses();

   }
  //  getCourses(){
  //   const data =  localStorage.getItem(Strings.STORAGE_KEY);
  //     console.log(data);
  //     if(data) {
  //       this.courses  = JSON.parse(data);
  //     }
  //  }

}


