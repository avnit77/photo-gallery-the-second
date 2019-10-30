import ImageItem from '../home/ImageItem.js';
const test = QUnit.test;

QUnit.module('Render Image Item');

test('renders html from data', assert => {
    // arrange
    const image = {
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        title: 'UniWhal',
        description: 'A unicorn and a narwhal nuzzling their horns',
        keyword: 'narwhal',
        horns: 1
    };

    const expected = /*html*/`
            <li>
                <div class="info-container">
                    <h2>UniWhal</h2>
                    <p class="image-type">narwhal</p>
                </div>
                <div class="image-container">
                    <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="UniWhal"/>
                    <p>A unicorn and a narwhal nuzzling their horns</p>
                </div>
                <p class="horns">Number of horns: 1</p>
            </li>
    `;

    // act
    const props = { image: image };
    const imageItem = new ImageItem(props);
    const html = imageItem.renderHTML();

    // assert
    assert.htmlEqual(html, expected);
});