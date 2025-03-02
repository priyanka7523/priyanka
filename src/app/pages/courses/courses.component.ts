
import { Course } from './../../interfaces/course.interface';
import { CourseService } from './../../services/course/course.service';
import { Component, computed, effect, inject, signal, input, Input, output, model } from '@angular/core';


@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
courses() {
throw new Error('Method not implemented.');
}

  // @Input() courses: any;
  // courses: Course[] = [];
  // courses = signal<Course[]>([]);


  // @Input() isAdmin = false;

  isAdmin = input<boolean>(false);

  // isAdmin1 =  model<boolean>(false, {
  //   alias:'isActive',
  // });

  // isAddmin1 =  model.required<boolean>( {
  //   alias:'isActive',
  // });

//   isAdmin = input.required(
//     // false,
//     {
//     // alias: 'isAdm'
//     // transform: (value:boolean) => {
//     //   // execute any code
//     //  return value;
//     // },
//   }
// );



  // @Output() del = new EventEmitter();

  // del = output<any>({
  //   alias: '',
  // });

  // coursesSub!: Subscription ;
 courseService = inject(CourseService);

  // courses = computed(() => this.courseService.coursesSignal());

  // private sanitizer = inject ( DomSanitizer);


  constructor()
    // private CourseService: CourseService
  {
    // Use `effect` to automatically respond to changes in the service's courses signal
    // effect(() => {
    //   console.log('effect');
    //   const courses = this.courseService.coursesSignal();
    //   if(courses !== this.courses()) {
    //     this.courses.set(courses);
    //     console.log('Updated courses:', this.courses());
    //   }
    // }, {allowSignalWrites: true});
  }




  ngOnInit() {

  // //  this.courses = this.courseService.getCourses();
  //   this.courses.set(this.courseService.getCourses());
  //   // this.getCourses();

  //    this.coursesSub = this.courseService.courses.subscribe({
  //     next: (courses) => {
  //       // this.courses = courses;
  //       // console.log('courses:', this.courses);
  //       this.courses.set(courses);
  //       console.log('courses:', this.courses());

  //     },
  //     error: (e) => {
  //       console.log(e);
  //     }
  //   });
  }

  // sanitizeUrl(value: string) {
  //   return this.sanitizer.sanitize(SecurityContext.URL, value) || null;
  // }

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

  // changeIsActive(course: Course) {
  //   this.isAdmin1.update((val) => !val);
  // }

  ngOnDestroy() {
  //   console.log('courses ondestroy');
  //  if(this.coursesSub) this.coursesSub.unsubscribe();
  }

}
