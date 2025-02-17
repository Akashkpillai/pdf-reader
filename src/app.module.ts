import { Module } from '@nestjs/common';
import { PdfController } from './pdf/pdf.controller';
import { PdfService } from './pdf/pdf.service';
import { PdfModule } from './pdf/pdf.module';

@Module({
  imports: [PdfModule],
  controllers: [PdfController],
  providers: [PdfService],
})
export class AppModule {}
