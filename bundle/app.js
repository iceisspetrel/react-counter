webpackJsonp([0],{0:function(e,t,n){(function(e,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(166),s=r(o);n(178),e.render(t.createElement("div",{className:"app-root"},t.createElement(s.default,null)),document.getElementById("app"))}).call(t,n(1),n(165))},166:function(module,exports,__webpack_require__){(function(log,React){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_BaseComponent2=__webpack_require__(168),_BaseComponent3=_interopRequireDefault(_BaseComponent2),_CounterResult=__webpack_require__(181),_CounterResult2=_interopRequireDefault(_CounterResult),_CounterKeyBoard=__webpack_require__(182),_CounterKeyBoard2=_interopRequireDefault(_CounterKeyBoard),CounterBox=function(_BaseComponent){function CounterBox(e){_classCallCheck(this,CounterBox);var t=_possibleConstructorReturn(this,(CounterBox.__proto__||Object.getPrototypeOf(CounterBox)).call(this,e));return t.state={result:"0",stack:[]},t}return _inherits(CounterBox,_BaseComponent),_createClass(CounterBox,null,[{key:"ClassName",value:function(){return"CounterBox"}}]),_createClass(CounterBox,[{key:"onKeyClick",value:function onKeyClick(item){switch(log.debug(item),item.key){case"reset":this.setState({result:"0"});break;case"num":"0"==this.state.result?this.setState({result:item.name}):Number.isFinite(this.state.result-0)?this.setState({result:this.state.result+""+item.name}):(this.setState({result:item.name}),this.state.stack.length>0&&(this.state.stack.push(item.name),this.setState({stack:this.state.stack})));break;case"reverse":this.setState({result:0-this.state.result+""});break;case"delete":var newValue=this.state.result.substring(0,this.state.result.length-1);this.setState({result:newValue.length>0?newValue:"0"});break;case"percent":this.setState({result:this.state.result/100+""});break;case"point":if("0"==this.state.result)return;if(this.state.result.split(".").length>1)return;this.setState({result:this.state.result+"."});break;case"+":case"-":case"x":case"/":if(this.state.stack.length>0&&!Number.isFinite(this.state.stack[this.state.stack.length-1]-0))return;0==this.state.stack.length&&this.state.stack.push(this.state.result),this.state.stack.push(item.name),this.setState({stack:this.state.stack,result:item.key});break;case"e":var result=eval(this.state.stack.join(""));this.setState({result:result+"",stack:[]});break;case"xx":this.setState({result:this.state.result*this.state.result+"",stack:[]});break;case"g":this.setState({result:Math.sqrt(this.state.result)+"",stack:[]})}}},{key:"render",value:function(){return React.createElement("section",{className:"counter-box"},React.createElement(_CounterResult2.default,{result:this.state.result}),React.createElement(_CounterKeyBoard2.default,{onKeyClick:this.onKeyClick.bind(this)}))}}]),CounterBox}(_BaseComponent3.default);exports.default=CounterBox}).call(exports,__webpack_require__(167),__webpack_require__(165))},168:function(e,t,n){(function(e){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(e){r(this,t);var s=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),a=s.__proto__.constructor.ClassName,u="";return name&&(u=a()),u&&n(169)("./"+u+".css"),s}return s(t,e),t}(e.Component);t.default=a}).call(t,n(165))},169:function(e,t,n){function r(e){return n(o(e))}function o(e){return s[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var s={"./CountKeyBoard.css":170,"./CountResult.css":174,"./CounterBox.css":176,"./common.css":178};r.keys=function(){return Object.keys(s)},r.resolve=o,e.exports=r,r.id=169},170:function(e,t){},174:function(e,t){},176:function(e,t){},178:function(e,t){},181:function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(168),c=r(i),l=function(t){function n(e){return o(this,n),s(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e))}return a(n,t),u(n,null,[{key:"ClassName",value:function(){return"CounterResult"}}]),u(n,[{key:"render",value:function(){return e.createElement("section",{className:"counter-result"},e.createElement("div",{className:"result-main"},e.createElement("input",{type:"text",readOnly:!0,value:this.props.result})))}}]),n}(c.default);l.defaultProps={result:"0"},l.propTypes={result:e.PropTypes.string},t.default=l}).call(t,n(165))},182:function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(168),c=r(i),l=n(183),f=function(t){function n(e){o(this,n);var t=s(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={Keys:[]},t}return a(n,t),u(n,null,[{key:"ClassName",value:function(){return"CounterKeyBoard"}}]),u(n,[{key:"componentDidMount",value:function(){this.setState({Keys:l})}},{key:"render",value:function(){var t=this;return e.createElement("section",{className:"counter-key-board"},t.state.Keys.map(function(n,r){return e.createElement("div",{className:"line",key:"line"+r},n.map(function(n,r){return e.createElement("a",{key:"key"+r,onClick:function(e){t.props.onKeyClick(n)},className:"key"+(n.width>1?" long":""),style:{color:n.color}},n.name)}))}))}}]),n}(c.default);t.default=f}).call(t,n(165))},183:function(e,t){"use strict";e.exports=[[{name:"C",key:"reset",width:1,color:"#ff5050"},{name:"+/-",key:"reverse",width:1,color:"#00b4ff"},{name:"%",key:"percent",width:1,color:"#00b4ff"},{name:"←",key:"delete",width:2,color:"#ff5050"}],[{name:"7",key:"num",width:1,color:"#666"},{name:"8",key:"num",width:1,color:"#666"},{name:"9",key:"num",width:1,color:"#666"},{name:"+",key:"+",width:1,color:"#00b4ff"},{name:"-",key:"-",width:1,color:"#00b4ff"}],[{name:"4",key:"num",width:1,color:"#666"},{name:"5",key:"num",width:1,color:"#666"},{name:"6",key:"num",width:1,color:"#666"},{name:"X",key:"x",width:1,color:"#00b4ff"},{name:"/",key:"/",width:1,color:"#00b4ff"}],[{name:"1",key:"num",width:1,color:"#666"},{name:"2",key:"num",width:1,color:"#666"},{name:"3",key:"num",width:1,color:"#666"},{name:"×²",key:"xx",width:1,color:"#00b4ff"},{name:"√",key:"g",width:1,color:"#00b4ff"}],[{name:"0",key:"num",width:2,color:"#666"},{name:".",key:"point",width:1,color:"#666"},{name:"=",key:"e",width:2,color:"#ff5050"}]]}});