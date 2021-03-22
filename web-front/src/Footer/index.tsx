import './styles.css';
import handleClickContato from './../Services/Contato';


function Footer() {
    return (
        <footer className="main-footer">
            Site projetado e desenvolvido pela <a className="link-contato" href="#main-footer" onClick={handleClickContato} >REGIF</a>
        </footer>
    );
}

export default Footer;