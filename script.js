class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector);
    }
    
    blockHide() {
        this.$el.style.display = 'none';
    }

    blockShow(color) {
        this.$el.style.display = 'block';
        this.$el.style.backgroundColor = color;
    }
    setText(text) {
        this.$el.textContent = text;
    }
    addBorder(color, width) {
        this.$el.style.border = `${width}px solid ${color}`;
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector);
        this.$el.style.width = options.width + "px";
        this.$el.style.height = options.height + "px";
        this.$el.style.background = options.color;
    }
}

const box1 = new Box({
    selector: '#box1',
    width: 400,
    height: 400,
    color: 'lime',
});

box1.blockHide();
box1.blockShow()
box1.setText('Hello World!');
box1.addBorder('black', 10)