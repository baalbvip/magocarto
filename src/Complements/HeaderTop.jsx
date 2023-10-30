import { HiHome } from "react-icons/hi"
import { BiSearchAlt } from "react-icons/bi"

export default function HeaderTop() {

    return (
        <>
            <div className="header-top">
                <div className="space">
                    <button className="home"><HiHome /></button>
                </div>
                <div className="space">
                    <a href="">¿QUIENES SOMOS?</a>
                </div>
                <div className="space">
                    <a href="">LIBRO DE LAS SOMBRAS</a>
                </div>
                <div className="space">
                    <div className="logo">
                        <img src="/src/img/logo_text.png" alt="" />
                    </div>
                </div>
                <div className="space">
                    <a href="">CURSOS</a>
                </div>
                <div className="space">
                    <a href="">SERVICIOS</a>
                </div>
                <div className="space">
                    <a href="">CONTACTO</a>
                </div>
                <div className="space">
                    <div className="search">
                        <i> <BiSearchAlt /></i>
                        <input type="text" />
                    </div>
                </div>
            </div>
        </>
    )
}