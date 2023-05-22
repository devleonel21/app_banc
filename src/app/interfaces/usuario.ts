import { Post } from "./post";

export interface Usuario {
    id: number;
    nombre: string;
    username: number;
    direccion: string;
    correo: string;
    phone: string;
    post : Post[];
}
