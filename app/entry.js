require('./style/common.css');

import CounterBox from './module/CounterBox.jsx';

ReactDOM.render(
    <div className="app-root">
        <CounterBox />
    </div>,
    document.getElementById('app')
);
