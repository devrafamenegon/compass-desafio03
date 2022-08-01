import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map, Observable, tap } from "rxjs";
import { Employee } from "../entities/employee.entity";

@Injectable()
export class ResponseTransformerInterceptor implements NestInterceptor {
  validateResponse(value: Employee): Employee {
    value.cpf = value.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    return value;
  }
  
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    return next
      .handle()
      .pipe(
        map((data) => {
          if (data instanceof Array) {
            data.forEach((value: Employee) => {
              this.validateResponse(value);
              return value;
            })
          }
          else {
            this.validateResponse(data);
          }

          return data;
        })
      )
  }
}