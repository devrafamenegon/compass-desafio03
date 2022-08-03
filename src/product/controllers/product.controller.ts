import { Body, Controller, Get, Param, ParseUUIDPipe, Post } from "@nestjs/common";
import { ApiBody, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateProductDTO } from "src/dtos/createProduct.dto";
import { Product } from "../entities/product.entity";
import { ProductService } from "../services/product.service";

@ApiTags('products')
@Controller('api/v1/product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiResponse({ status: 200, description: 'Product Listing.'})
  @ApiResponse({ status: 400, description: 'A contact error has occurred.'})
  @Get()
  findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @ApiParam({ name: 'uuid', type: String })
  @ApiResponse({ status: 200, description: 'Product Listing.'})
  @ApiResponse({ status: 400, description: 'A contact error has occurred.'})
  @Get(':uuid')
  findOne(@Param('uuid', ParseUUIDPipe) uuid: string): Promise<Product> {
    return this.productService.findOne(uuid);
  }

  @ApiBody({ type: [CreateProductDTO] })
  @ApiResponse({ status: 201, description: 'The Product was successfully registered.'})
  @ApiResponse({ status: 400, description: 'A contact error has occurred.'})
  @Post()
  create(@Body() product: CreateProductDTO): Promise<Product> {
    return this.productService.create(product);
  }
}