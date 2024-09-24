import { Course } from '@/models/course.model';
import { ICourseRepository } from '@/repository/interface/i.course.repository';
import { BaseCrudService } from '@/service/base/base.service';
import { ICourseService } from '@/service/interface/i.course.service';
import { inject, injectable } from 'inversify';

@injectable()
export class CourseService extends BaseCrudService<Course> implements ICourseService<Course> {
  constructor(@inject('CourseRepository') repository: ICourseRepository<Course>) {
    super(repository);
  }
}
