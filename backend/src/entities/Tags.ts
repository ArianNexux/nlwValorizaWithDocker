import {Entity, PrimaryColumn, Column, UpdateDateColumn, CreateDateColumn} from "typeorm";

@Entity("tags")
export class Tags {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

