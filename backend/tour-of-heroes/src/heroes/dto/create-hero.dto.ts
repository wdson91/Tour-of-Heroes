import { IsString, IsNotEmpty, MinLength } from 'class-validator';
/* eslint-disable */
export class CreateHeroDto {
    readonly id?: number;

    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    readonly specialPower: string;
}
