// src/pdf/pdf.service.ts
import { Injectable } from '@nestjs/common';
import * as pdf from 'pdf-parse';

@Injectable()
export class PdfService {
  async parsePdf(
    buffer: Buffer,
  ): Promise<{ text: string; metadata: any; json: any }> {
    try {
      const data = await pdf(buffer);
      let jsonResult;
      if (data && data.text) {
        jsonResult = this.convertTextToJson(data.text);
      }
      return {
        text: data.text,
        json: jsonResult,
        metadata: data.info,
      };
    } catch (error) {
      throw new Error('Failed to parse PDF: ' + error.message);
    }
  }

  convertTextToJson(text: string): { [key: string]: string } {
    const lines = text.split('\n').filter((line) => line.trim() !== '');
    const jsonData: { [key: string]: string } = {};

    lines.forEach((line) => {
      const [key, ...valueParts] = line.split(':');
      if (key && valueParts.length > 0) {
        const value = valueParts.join(':').trim();
        jsonData[key.trim()] = value;
      }
    });

    return jsonData;
  }
}
