import BaseComponent from './BaseComponent.jsx';

class CounterResult extends BaseComponent {

    static ClassName () {
        return 'CounterResult';
    }

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <section className="counter-result">
                <div className="result-main">
                    <input type="text" readOnly value={this.props.result}/>
                </div>
            </section>
        );
    }
}

CounterResult.defaultProps = {
    result : '0'
};

CounterResult.propTypes = {
    result : React.PropTypes.string
}


export default CounterResult;
