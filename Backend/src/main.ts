import { initApplication } from '@/app'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await initApplication()
  const document = SwaggerModule.createDocument(
    app,
    new DocumentBuilder().build(),
  )
  SwaggerModule.setup('swagger', app, document)

  const PORT = process.env.PORT || 3000
  return app.listen(PORT, () =>
    console.log(`Server are running on http://localhost:${PORT}`),
  )
}
bootstrap()
