import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn  } from "typeorm";
import { User } from "./User";

@Entity({
    name: "credentials"
})
export class Credential {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;
}