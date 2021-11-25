import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Game } from "./Game";

@Entity("orders")
class Order {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    type: string;

    @ManyToOne(() => Game, (game) => game.orders)
    games: Game[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export {Order}