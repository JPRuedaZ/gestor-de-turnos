import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn  } from "typeorm";

import { Appointment } from "./Appointment";
import { Credential } from "./Credential";

@Entity({
    name: "users"
})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    birthdate: Date;

    @Column()
    nDni: number;

    @Column()
    credentialsId: number;

    @OneToOne(() => Credential)
    @JoinColumn({name: "credentialsId"})
    credentials: Credential;

    @OneToMany(() => Appointment, (appointment) => appointment.user)
    appointments: Appointment[];
}
