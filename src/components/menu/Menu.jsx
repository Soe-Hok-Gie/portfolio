import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        //perhatikan className menu, tanda petiknya spasi. spasi disini berfungsi sebagai pemisah antara className menu dgn class aktive
        <div className={"menu " + (menuOpen && "active")} >

            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>

                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#testemonials">Testemonials</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        
        </div>
    )
}
