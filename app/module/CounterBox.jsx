import BaseComponent from './BaseComponent.jsx';
import CounterResult from './CounterResult.jsx';
import CounterKeyBoard from './CounterKeyBoard.jsx';

class CounterBox extends BaseComponent {

    static ClassName () {
        return 'CounterBox';
    }

    constructor (props) {
        super(props);
        this.state = {
            result : '0',
            stack  : []
        }
    }

    onKeyClick (item) {
        log.debug(item);
        switch (item.key) {
            case 'reset':
                this.setState({
                    result : '0'
                });
                break;
            case 'num':
                if(this.state.result == '0'){
                    this.setState({
                        result : item.name
                    });
                } else if(!Number.isFinite(this.state.result-0)){
                    this.setState({
                        result : item.name
                    });
                    if(this.state.stack.length > 0){
                        this.state.stack.push(item.name);
                        this.setState({
                            stack : this.state.stack
                        });
                    }
                }else {
                    this.setState({
                        result : this.state.result + '' + item.name
                    });
                }
                break;
            case 'reverse':
                this.setState({
                    result : (0 - this.state.result) + ''
                });
                break;
            case 'delete':
                var newValue = this.state.result.substring(0, this.state.result.length-1);
                this.setState({
                    result : newValue.length > 0 ? newValue : '0'
                });
                break;
            case 'percent' :
                this.setState({
                    result : this.state.result / 100 + ''
                });
                break;
            case 'point' :

                if(this.state.result == '0') return;
                if(this.state.result.split('.').length > 1) return;
                this.setState({
                    result : this.state.result + '.'
                });
                break;
            case '+':
            case '-':
            case 'x':
            case '/':

                if(this.state.stack.length > 0 && !Number.isFinite(this.state.stack[this.state.stack.length-1]-0)) return;
                if(this.state.stack.length == 0){
                    this.state.stack.push(this.state.result);
                }
                this.state.stack.push(item.name);
                this.setState({
                    stack : this.state.stack,
                    result : item.key
                });
                break;
            case 'e':
                let result = eval(this.state.stack.join(''));
                this.setState({
                    result : result + '',
                    stack : []
                });
                break;
            case 'xx':
                this.setState({
                    result : this.state.result * this.state.result + '',
                    stack  : []
                });
                break;
            case 'g':
                this.setState({
                    result : Math.sqrt(this.state.result) + '',
                    stack  : []
                });
                break;
            default:;
        }
    }

    render () {
        return (
            <section className="counter-box">
                <CounterResult result={this.state.result}/>
                <CounterKeyBoard onKeyClick={this.onKeyClick.bind(this)}/>
            </section>
        );
    }

}

export default CounterBox;
