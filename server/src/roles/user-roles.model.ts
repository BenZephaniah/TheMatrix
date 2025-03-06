import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "./roles.model";
import {User} from "../users/users.model";


@Table({tableName: 'user_roles', createAt: false, updateAt: false})
export class UserRoles extends Model<UserRoles> {

    @ApiProperty({example: "1"})
    @Column({type: DataType.INTEGER, unique: true, allowNull: false})
    id: number;

    @ForeignKey(() => Role)
    @Column({type: DataType.INTEGER})
    roleId: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

}