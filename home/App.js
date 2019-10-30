
import Component from './Component.js'; //component
import images from '../data/images.js'; //imager
import Header from './Header.js'; //header
import ImageList from './ImageList.js'; //gallery
import FilterImages from './FilterImages.js'; //filter

class App extends Component {
    renderHTML() {
        return /*html*/`
            <div>
                <main>
                    <section class="options">
                    </section>
                    <section class="list-section">
                    </section>
                </main>
            </div>
        `;
    }

    onRender(dom) {
        const header = new Header;
        dom.prepend(header.renderDOM());

        const props = {
            images: images
        };

        const imageList = new ImageList(props);
        const imageListDOM = imageList.renderDOM();

        const listSection = dom.querySelector('.list-section');
        listSection.appendChild(imageListDOM);


        const filterimages = new FilterImages({
            images: images,
            onFilter: (imageType) => {
                let filteredimages;
                if (!imageType) {
                    filteredimages = images;
                }
                else {
                    filteredimages = images.filter(image => {
                        return image.type === imageType;
                    });
                }

                const updateProps = { images: filteredimages };
                imageList.update(updateProps);
            }
        });

        const filterimagesDOM = filterimages.renderDOM();

        const optionsSection = dom.querySelector('.options');
        optionsSection.appendChild(filterimagesDOM);

    }
}

export default App;