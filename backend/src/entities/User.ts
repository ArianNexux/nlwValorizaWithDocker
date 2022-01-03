import {Column, Entity, PrimaryColumn, UpdateDateColumn, CreateDateColumn} from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity("users")
export default class User {

    @PrimaryColumn()
    id: string

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


    constructor(){
        if(!this.id){
            this.id = uuidv4();;
        }
    }
}
