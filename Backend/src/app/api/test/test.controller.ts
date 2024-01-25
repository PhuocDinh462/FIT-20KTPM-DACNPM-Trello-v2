import appRoutes from '@/app/app.routes'
import { InjectController, InjectRoute } from '@/decorators'
import { SwaggerApi } from '@/decorators/swagger.decorator'
import { ZodValidationPipe } from '@/pipes/ZodValidationPipe'
import { Query, UsePipes } from '@nestjs/common'
import {
  TestApiQuery,
  TestApiQueryJoiSchema,
  TestApiQuerySchema,
} from './test.dto'
import { JoiValidationPipe } from '@/pipes/JoiValidationPipe'

@InjectController({
  name: 'core',
  isCore: true,
})
export class TestController {
  @InjectRoute(appRoutes.testApi)
  getEcho(
    @Query(new JoiValidationPipe(TestApiQueryJoiSchema)) query: TestApiQuery,
  ) {
    return {
      Hello: query.name,
    }
  }
}
