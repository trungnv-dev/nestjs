import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {
    @PrimaryGeneratedColumn({
        type: 'bigint'
    })
    id: number;

    @Column({
        nullable: true,
        length: 100,
    })
    firstName: string;

    @Column({
        nullable: true,
        length: 100,
    })
    lastName: string;

    @Column({
        length: 150,
        unique: true,
    })
    email: string;

    @Column()
    address: string;

    @Column()
    password: string;

    @Column({ default: true })
    isActive: boolean;
}