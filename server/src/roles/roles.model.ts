import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";
import {UserRoles} from "./user-roles.model";

interface RoleCreationAttributes {
    value: string;
    description: string;
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAttributes> {

    @ApiProperty({example: "1"})
    @Column({type: DataType.INTEGER, unique: true, allowNull: false})
    id: number;

    @ApiProperty({example: "ADMIN", description: "Уникальное значение роли"})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string;

    @ApiProperty({example: "Администратор", description: "Описание роли"})
    @Column({type: DataType.STRING, allowNull: false})
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];
}