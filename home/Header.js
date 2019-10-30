import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
            <header>
                <h1>Photo Gallery</h1>
            </header>
        `;
    }
}

export default Header;