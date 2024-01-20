import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document, now } from 'mongoose';


export type ProductDocument = HydratedDocument<Product>;
export type ProductType = ProductDocument & Document
@Schema()
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop({ default: false })
  acquired?: boolean;

  @Prop({ default: now() })
  createdAt?: Date;

  @Prop({ default: now() })
  updatedAt?: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
