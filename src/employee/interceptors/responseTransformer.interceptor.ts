import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map, Observable, tap } from "rxjs";
import { Employee } from "../entities/employee.entity";

@Injectable()
export class ResponseTransformerInterceptor implements NestInterceptor {
  formatCpf(cpf: string): string {
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    return cpf;
  }
  
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    return next
      .handle()
      .pipe(
        map((data) => {
          if (data instanceof Array) {
            data.forEach((value: Employee) => {
              value.cpf = this.formatCpf(value.cpf);
              return value;
            })
          }
          else {
            data.cpf = this.formatCpf(data.cpf);
          }

          return data;
        })
      )
  }
}