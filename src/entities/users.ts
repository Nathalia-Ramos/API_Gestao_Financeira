import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "users"})
@Index(["id", "mail"], {unique: true})
export class UserEntity {
    @PrimaryGeneratedColumn("increment")
        id!: number;

    @Column({ type: "varchar", length: 180, name: "full_name", default: null, nullable: false})
        full_name!: string;
    
    @Column({ type: "varchar", length: 180, name: "mail", default: null, nullable: false})
        mail!: string;
    
    @Column({ type: "varchar", length: 300, name: "pass", default: null, nullable: false})
        pass!: string;

    @Column({ type: "text", name: "goal", default: null, nullable: true})
        goal?: string;

    @Column({ type: "date", name: "created_at", default: () => "CURRENT_TIMESTAMP"})
    created_at!: string;

    @Column({ type: "date", name: "updated_at", default: () => "CURRENT_TIMESTAMP"})
    updated_at!: string;

}