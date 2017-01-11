import BaseComponent from './BaseComponent.jsx';

class Browser extends BaseComponent {

    static ClassName () {
        return 'Browser';
    }

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div>Browser</div>
        );
    }
}

export default Browser;
