import {Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";


interface UserCreationAttributes {
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttributes> {

    @ApiProperty({example: "1"})
    @Column({type: DataType.INTEGER, primaryKey: true, unique: true, autoIncrement: true})
    id: number;

    @ApiProperty({example: "stepa@gmail.com"})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: "Pas123"})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: "true"})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({example: "Reason"})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;

}