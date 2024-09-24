import { BaseContainer } from '@/container/base.container';
import { CourseController } from '@/controller/course.controller';
import { Course } from '@/models/course.model';
import { CourseRepository } from '@/repository/course.repository';
import { ICourseRepository } from '@/repository/interface/i.course.repository';
import { CourseService } from '@/service/course.service';
import { ICourseService } from '@/service/interface/i.course.service';

class CourseContainer extends BaseContainer {
  constructor() {
    super(Course);
    this.container.bind<ICourseService<Course>>('CourseService').to(CourseService);
    this.container.bind<ICourseRepository<Course>>('CourseRepository').to(CourseRepository);
    this.container.bind<CourseController>(CourseController).toSelf();
  }
  export() {
    const courseController = this.container.get<CourseController>(CourseController);
    const courseService = this.container.get<ICourseService<any>>('CourseService');
    return { courseController, courseService };
  }
}

const courseContainer = new CourseContainer();
const { courseController, courseService } = courseContainer.export();
export { courseController, courseService };
