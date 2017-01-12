import BaseComponent from './BaseComponent.jsx';

const Keys = require('../tool/Keys.js');

class CounterKeyBoard extends BaseComponent {

    static ClassName () {
        return 'CounterKeyBoard';
    }

    constructor (props) {
        super(props);
        this.state = {
            Keys : []
        };
    }

    componentDidMount () {
        this.setState({
            Keys : Keys
        });
    }

    render () {
        const _this = this;
        return (
            <section className="counter-key-board">
                {
                    _this.state.Keys.map(function(item, index){
                        return (
                            <div className="line" key={'line' + index}>
                                {
                                    item.map(function(key, index){
                                        return (
                                            <a key={'key' + index} onClick={(e) => {_this.props.onKeyClick(key)}} className={'key' +(key.width > 1 ? ' long' : '')} style={{color:key.color}}>{key.name}</a>
                                        );
                                    })
                                }
                            </div>
                        );
                    })
                }
            </section>
        );
    }

}

export default CounterKeyBoard;
