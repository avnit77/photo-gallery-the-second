import Component from '../Component.js';

class FilterImages extends Component {
    onRender(dom) {
        dom.addEventListener('change', () => {
            this.props.onFilter(dom.value);
        });
    }

    renderHTML() {
        return /*html*/`
    <select id="filter">
        <option value="" selected>all</option>
        <option value="narwhal">narwhal</option>
        <option value="rhino">rhino</option>
        <option value="unicorn">unicorn</option>
        <option value="triceratops">triceratops</option>
        <option value="markhor">markhor</option>
        <option value="mouflon">mouflon</option>
        <option value="addax">addax</option>
        <option value="chameleon">chameleon</option>
        <option value="lizard">lizard</option>
        <option value="dragon">dragon</option>
    </select>
        `;
    }
}

export default FilterImages;