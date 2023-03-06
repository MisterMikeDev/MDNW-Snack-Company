import { useState } from "react";
import Icon from "@reacticons/ionicons";
export default function Navegation() {
    const [open, setOpen] = useState(false);
    return (
        <nav className="flex flex-row">
            <button
                className="static z-[75] pr-5 text-5xl text-white hover:brightness-90 md:absolute md:-top-96"
                onClick={() => setOpen(!open)}
            >
                {open ? <Icon name="close" /> : <Icon name="menu" />}
            </button>
            <ul
                className={`${
                    !open && "translate-x-[100%] transform md:translate-x-0"
                } fixed bottom-0 left-0 flex w-screen transform flex-col items-center justify-center gap-2 bg-pastel-purple text-center font-bold text-white transition-all [transition-duration:300ms;] [height:calc(100vh-64px)] md:static md:mx-5 md:h-full md:w-auto md:flex-row md:bg-[#ffffff00]`}
            >
                <li
                    className="w-40 rounded-3xl border border-dark bg-pastel-purple px-2 py-1 hover:brightness-90"
                    onClick={() => setOpen(false)}
                >
                    <a href="/#home">Inicio</a>
                </li>
                <li
                    className="w-40 rounded-3xl border border-dark bg-pastel-purple px-2 py-1 hover:brightness-90"
                    onClick={() => setOpen(false)}
                >
                    <a href="/#productos">Productos</a>
                </li>
                <li
                    className="w-40 rounded-3xl border border-dark bg-pastel-purple px-2 py-1 hover:brightness-90"
                    onClick={() => setOpen(false)}
                >
                    <a href="/#integrantes">Integrantes</a>
                </li>
            </ul>
        </nav>
    );
}
