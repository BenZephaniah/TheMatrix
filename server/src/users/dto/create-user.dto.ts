import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({example: "stepa@gmail.com"})
    readonly email: string;

    @ApiProperty({example: "Pas123"})
    readonly password: string;
}