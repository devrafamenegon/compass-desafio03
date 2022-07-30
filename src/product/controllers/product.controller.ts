import { Body, Controller, Post } from "@nestjs/common";
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateProductDTO } from "src/dtos/createProduct.dto";
import { Product } from "../entities/product.entity";
import { ProductService } from "../services/product.service";

@ApiTags('products')
@Controller('api/v1/product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiBody({ type: [CreateProductDTO] })
  @ApiResponse({ status: 201, description: 'The Product was successfully registered.'})
  @ApiResponse({ status: 400, description: 'A contact error has occurred.'})
  @Post()
  create(@Body() product: CreateProductDTO): Promise<Product> {
    return this.productService.create(product);
  }
}