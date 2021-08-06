import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        //perhatikan className menu, tanda petiknya spasi. spasi disini berfungsi sebagai pemisah antara className menu dgn class aktive
        <div className={"menu " + (menuOpen && "active")} >

            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>

                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#works">Works</a>
                </li>
                <li>
                    <a href="#testemonials">Testemonials</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        
        </div>
    )
}
