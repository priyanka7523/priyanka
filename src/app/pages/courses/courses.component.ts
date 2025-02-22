// import { error } from 'console';
// import { error } from 'console';
import { Subscription } from 'rxjs';
import { Course } from './../../interfaces/course.interface';
import { CourseService } from './../../services/course/course.service';
import { Component, Input, inject } from '@angular/core';
// import { Strings } from '../../enum/strings.enum';


@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  // @Input() courses: any;
  courses: Course[] = [];
  @Input() isAdmin = false;
  // @Output() del = new EventEmitter();
  coursesSub!: Subscription ;
  private courseService = inject(CourseService);


  constructor(
    // private CourseService: CourseService
  ) {}


  ngOnInit() {
   this.courses = this.courseService.getCourses();
    // this.getCourses();

     this.coursesSub = this.courseService.courses.subscribe({
      next: (courses) => {
        this.courses = courses;
        console.log('courses:', this.courses);
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  //  getCourses(){
  //   const data =  localStorage.getItem(Strings.STORAGE_KEY);
  //     console.log(data);
  //     if(data) {
  //       this.courses  = JSON.parse(data);
  //     }
  //  }

  deleteCourse(course: Course) {
    // this.del.emit(course);
    this.courseService.deleteCourse(course);
  }

  ngOnDestroy() {
    console.log('courses ondestroy');
   if(this.coursesSub) this.coursesSub.unsubscribe();
  }

}
