import {Entity, PrimaryColumn, Column, UpdateDateColumn, CreateDateColumn} from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity("tags")
export default class Tag {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        if (!this.id) 
            this.id = uuidv4();
    }
}

