import { ErrorCode } from '@/enums/error-code.enums';
import accountRouter from '@/routes/account/account.route';
import courseRouter from '@/routes/course/course.route';
import courseCategoryRouter from '@/routes/course_category/course_category.route';
import discountRouter from '@/routes/discount/discount.route';
import roleRouter from '@/routes/role/role.route';
import BaseError from '@/utils/error/base.error';

export function route(app: any, root_api: string) {
  app.use(`${root_api}/course-category`, courseCategoryRouter);
  app.use(`${root_api}/discount`, discountRouter);
  app.use(`${root_api}/course`, courseRouter);
  app.use(`${root_api}/account`, accountRouter);
  app.use(`${root_api}/role`, roleRouter);
  app.all('*', (req: any, res: any, next: any) => {
    const err = new BaseError(ErrorCode.API_NOT_EXISTS, 'API Not Exists');
    next(err);
  });
}
