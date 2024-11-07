import { Injectable } from '@nestjs/common';
import { Model, model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Bootcamp } from './entities/bootcamp.entity';

import { CreateBootcampDto } from './dto/create-bootcamp.dto';
import { UpdateBootcampDto } from './dto/update-bootcamp.dto';

@Injectable()
export class BootcampsService {

  constructor(@InjectModel(Bootcamp.name) private BootcampModel: Model <Bootcamp> ){}



  async create(CreateBootcampDto: CreateBootcampDto) {
    
    const newBootcamp 
                = new this.BootcampModel(CreateBootcampDto);
    return await newBootcamp.save()
    
  }

   async findAll() {
    return await this.BootcampModel.find().exec();
  }

  findOne(id: string) {
    return this.BootcampModel.find({_id: id } ).exec();
  }

  update(id: string, updateBootcampDto: UpdateBootcampDto) {
    return this.BootcampModel.findByIdAndUpdate(id, {
      $set: updateBootcampDto
    });
  }

  remove(id: string) {
    return `This action removes a #${id} bootcamp`;
  }
}
