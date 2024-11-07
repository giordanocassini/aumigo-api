import {
  IsString,
  IsEmail,
  MinLength,
  IsNotEmpty,
  IsNumberString,
  Length,
  IsEnum,
} from 'class-validator';

export enum UserType {
  PetWalker = 'PetWalker',
  Tutor = 'Tutor',
}

export class User {
  @IsString()
  @IsNotEmpty({ message: 'Name must not be empty' })
  name: string;

  @IsEmail({}, { message: 'Email must be a valid email address' })
  email: string;

  @IsString()
  @MinLength(4, { message: 'Password must be at least 4 characters long' })
  password: string;

  @IsNumberString({}, { message: 'CPF number must contain only numbers' })
  @Length(11, 11, { message: 'CPF number must be exactly 11 digits' })
  cpf: string;

  @IsEnum(UserType, { message: 'User type must be either PetWalker or Tutor' })
  userType: UserType;
}
