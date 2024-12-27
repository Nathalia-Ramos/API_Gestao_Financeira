import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "users"})
@Index(["id"], {unique: true})
export class UserEntity {
    @PrimaryGeneratedColumn("increment")
        id!: number;

    @Column({ type: "varchar", length: 180, name: "name", default: null, nullable: false})
        full_name!: string;
    
    @Column({ type: "int", name: "user_id", nullable: false})
        user_id!: string;

    @ManyToOne(() => UserEntity, (user) => user.id)
    
    private user!: UserEntity
    
}