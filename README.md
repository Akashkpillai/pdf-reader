# NestJS PDF Reader

A simple PDF reader built with NestJS that demonstrates how to upload PDF files, extract their content using **pdf-parse**, and convert the extracted text into JSON data.

## Overview

This project provides a practical example of building a PDF processing API using NestJS. The application allows users to:

- **Upload PDF Files:** Accept PDF uploads via an HTTP endpoint.
- **Extract Text Content:** Parse and extract text from the uploaded PDF using the **pdf-parse** library.
- **Convert to JSON:** Optionally process the extracted text into a structured JSON format, ideal for further processing or integration with other systems.

The project is structured following NestJS best practices by separating concerns between controllers and services.

## Features

- **File Upload:** Securely upload PDF files using NestJS's built-in support with Multer.
- **PDF Parsing:** Leverage **pdf-parse** to extract textual content from PDFs.
- **JSON Conversion:** Convert plain text into key-value JSON objects, which is especially useful when the PDF contains structured data.
- **Clean Architecture:** Demonstrates the use of controllers for request handling and services for business logic, ensuring a maintainable and scalable codebase.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/nestjs-pdf-reader.git
   cd nestjs-pdf-reader
