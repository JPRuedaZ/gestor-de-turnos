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
    hour: Date;

    @Column()
    userId: number;

    @Column()
    status: string;

    @ManyToOne(() => User, (user => user.appointments))
    @JoinColumn({name: "userId"})
    user: User


}