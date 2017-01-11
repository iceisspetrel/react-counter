class BaseComponent extends React.Component {
    constructor (props) {
        super(props);
        let ClassName = this.__proto__.constructor.ClassName,
            cssName   = '';
        name && (cssName = ClassName());
        if(cssName){
            require('../style/' + cssName + '.css');
        }
    }
}

export default BaseComponent;
