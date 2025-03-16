import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from './address.entity';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { User } from 'src/user/user.entity';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<Address[]> {
    return this.addressRepository.find({ relations: ['user'] });
  }

  async findOne(id: number): Promise<Address> {
    const address = await this.addressRepository.findOne({
      where: { id },
      relations: ['user'],
    });
    if (!address) {
      throw new NotFoundException(`Address with ID ${id} not found`);
    }
    return address;
  }

  async findByUser(userId: number): Promise<Address[]> {
    return this.addressRepository.find({
      where: { user: { id: userId } },
    });
  }

  async create(createAddressDto: CreateAddressDto): Promise<Address> {
    const user = await this.userRepository.findOne({
      where: { id: createAddressDto.userId },
    });

    if (!user) {
      throw new NotFoundException(
        `User with ID ${createAddressDto.userId} not found`,
      );
    }

    const address = this.addressRepository.create({
      name: createAddressDto.name,
      address: createAddressDto.address,
      user: user,
    });

    return this.addressRepository.save(address);
  }

  async update(
    id: number,
    updateAddressDto: UpdateAddressDto,
  ): Promise<Address> {
    const address = await this.findOne(id);

    if (updateAddressDto.name) {
      address.name = updateAddressDto.name;
    }

    if (updateAddressDto.address) {
      address.address = updateAddressDto.address;
    }

    return this.addressRepository.save(address);
  }

  async remove(id: number): Promise<void> {
    const result = await this.addressRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Address with ID ${id} not found`);
    }
  }
}
