import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export default class User {
   @PrimaryGeneratedColumn("uuid")
   id: string;
   
   @Column("text")
   username: string;

   @Column("text")
   email: string;
   
   @Column("text")
   password: string;
   
   @Column("text")
   firstName: string;
   
   @Column("text")
   lastName: string;
   
   @Column("text")
   gender:string;
   
   @Column("date")
   dob: string;
}