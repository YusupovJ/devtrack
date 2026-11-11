import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto.js";
import { UpdateUserDto } from "./dto/update-user.dto.js";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity.js";
import { hash, genSalt } from "bcrypt";
import { SALT_ROUNDS } from "../../common/constants/index.js";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async create(createUserDto: CreateUserDto) {
    const userExists = await this.userRepo.exists({
      where: { email: createUserDto.email },
    });

    if (userExists) {
      throw new ConflictException("User already exists");
    }

    const passwordHash = await this.hashPassword(createUserDto.password);

    const newUser = this.userRepo.create({
      ...createUserDto,
      password: passwordHash,
    });

    return await this.userRepo.save(newUser);
  }

  async findAll() {
    // TEMP: Until pagination util isn't be added
    return await this.userRepo.find({ take: 15 });
  }

  async findOne(id: number) {
    const user = await this.userRepo.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException("User not found");
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepo.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException("User not found");
    }

    Object.assign(user, updateUserDto);

    return await this.userRepo.save(user);
  }

  async remove(id: number) {
    const user = await this.userRepo.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException("User not found");
    }

    const removedUser = await this.userRepo.softRemove(user);

    return removedUser;
  }

  private async hashPassword(password: string) {
    const salt = await genSalt(SALT_ROUNDS);
    return await hash(password, salt);
  }
}
