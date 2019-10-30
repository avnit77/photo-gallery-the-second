
import Component from '../Component.js';

class ImageItem extends Component {
    renderHTML() {
        const image = this.props.image;

        return /*html*/`
            <li>
                <div class="info-container">
                    <h2>${image.title}</h2>
                    <p class="image-type">${image.keyword}</p>
                </div>
                <div class="image-container">
                    <img src="${image.url}" alt="${image.title}"/>
                    <p>${image.description}</p>
                </div>
                <p class="horns">Number of horns: ${image.horns}</p>
            </li>
        `;
    }
}

export default ImageItem;