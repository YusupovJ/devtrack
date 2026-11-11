import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus } from "@nestjs/common";
import type { Response } from "express";
import { QueryFailedError } from "typeorm";

@Catch(QueryFailedError)
export class TypeormExceptionFilter implements ExceptionFilter {
  catch(exception: QueryFailedError & { code?: string; detail?: string }, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    // 23505 - Unique error in PostgreSQL
    if (exception.code === "23505") {
      return response.status(HttpStatus.CONFLICT).json({
        statusCode: HttpStatus.CONFLICT,
        message: "Record with such unique field already exists",
        error: "Conflict",
      });
    }

    // TODO: Add log for failed database query (also for condition above)

    return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: "Database query failed",
    });
  }
}
