import { PartialType } from '@nestjs/mapped-types';
import { CreateCookieSampleDto } from './create-cookie-sample.dto';

export class UpdateCookieSampleDto extends PartialType(CreateCookieSampleDto) {}
