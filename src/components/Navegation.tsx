import { useState } from "react";
export default function Navegation() {
    const [open, setOpen] = useState(false);
    return (
        <nav className="flex flex-row">
            <button
                className="static z-[75] pr-10 hover:brightness-90 md:absolute md:-top-96"
                onClick={() => setOpen(!open)}
            >
                <div
                    className={`${
                        open && "translate-y-[11px] -rotate-45 transform"
                    } my-[6px] h-[5px] w-[35px] bg-white [transition-duration:400ms;]`}
                />
                <div
                    className={`${
                        open && " [opacity:0;]"
                    } my-[6px] h-[5px] w-[35px] bg-white [transition-duration:400ms;]`}
                />
                <div
                    className={`${
                        open && "-translate-y-[11px] rotate-45 transform"
                    } my-[6px] h-[5px] w-[35px] bg-white [transition-duration:400ms;]`}
                />
            </button>
            <ul
                className={`${
                    !open && "translate-x-[100%] transform md:translate-x-0"
                } trans form fixed bottom-0 left-0 flex w-screen flex-col items-center justify-center gap-2 bg-pastel-purple text-center font-bold text-white transition-all [transition-duration:300ms;] [height:calc(100vh-64px)] md:static md:mx-5 md:h-full md:w-auto md:flex-row md:bg-[#ffffff00]`}
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
