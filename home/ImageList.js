import Component from './Component.js';

class ImageList extends Component {

    renderHTML() {
        return /*html*/ `
        <section class="list-section"></section>
        `;

    }

    onRender(dom) {
        const props = this.props.images;
        props.forEach(image => {
            const imageItem = new ImageItem(image);
            dom.appendChild(imageItem.renderDOM());
        });

    }

}

export default ImageList;