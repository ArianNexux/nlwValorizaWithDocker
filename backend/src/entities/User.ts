import {Column, Entity, PrimaryColumn, UpdateDateColumn, CreateDateColumn} from "typeorm";

@Entity("users")
export class User {

    @PrimaryColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    admin: boolean

    @CreateDateColumn()
    created_at:Date

    @UpdateDateColumn()
    updated_at:Date
}
