import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1640732167500 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'users',
                columns: [
                    { 
                        name:'id',
                        isPrimary: true,
                        type: 'uuid',
                    },
                    {
                        name:'name',
                        type:'varchar'
                    },
                    {
                        name:'email',
                        type:'varchar'
                    },
                    {
                        name:'admin',
                        type:'boolean',
                        default: false
                    },
                    {
                        name:'created_at',
                        type:'timestamp',
                        default:"now()"
                    },
                    {
                        name:'updated_at',
                        type:'timestamp',
                        default:"now()"
                    }

                ]    
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
