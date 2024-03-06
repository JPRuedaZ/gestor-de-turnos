import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn  } from "typeorm";

import { User } from "./User";

@Entity({
    name: "appointments"
})
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @Column()
    time: string;

    @Column({default : "Active"})
    status: string;

    @Column()
    description: string;

    @ManyToOne(() => User, (user => user.appointments))
    user: User


}

