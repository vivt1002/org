import "./Footer.css"
import { AiFillGithub } from "react-icons"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='http://github.com/vivt1002'>
                <img src="/img/github.png" alt='Github' />

            </a>
            <a href='http://www.linkedin.com/in/viviana-vanesa-tapia'>
                <img src="/img/linkedin.png" alt='Linkedin' />
            </a>

        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Viviana Tapia</strong>
    </footer>

}

export default Footer
