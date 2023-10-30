export default function Footer() {

    return (
        <>
            <div className="footer">
                <div className="flex">
                    <div className="logo-footer">
                        <img src="/src/img/logo_dark.png" alt="" />
                    </div>

                    <div className="logo-magocarto">
                        <img src="/src/img/logo_cartomante.png" alt="" />
                    </div>

                    <div className="socials">
                        <p>Unete a nuestra Comunidad</p>

                        <div className="icons">
                            <a href=""><img src="/src/img/icon_facebook.png" alt="" /></a>
                            <a href=""><img src="/src/img/icon_ins.png" alt="" /></a>
                            <a href=""><img src="/src/img/icon_ws.png" alt="" /></a>
                            <a href=""><img src="/src/img/icon_tiktok.png" alt="" /></a>
                            <a href=""><img src="/src/img/icon_youtube.png" alt="" /></a>

                        </div>
                    </div>

                    <div className="info">
                        <span><b>Horario de Atencion:</b></span><br />
                        <span>Lunes a Viernes a 10:00 a.m. a 6:00 p.m.</span><br />
                        <span><b>Escribenos a: elmagocartomante@gmail.com</b></span>
                    </div>
                </div>
                <div className="copy">
                    <span>@2023 El mago Cartomante Made By Linda Alvarado</span>
                </div>
            </div>
        </>
    )
}