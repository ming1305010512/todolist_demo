import TodoBox from './components/todobox';

var React = require('react');
var ReactDOM = require('react-dom');

export default class Index extends React.Component {
  constructor(){
    super();
  };
  render() {
    return (
        <TodoBox />
    );
  }
}

ReactDOM.render(<Index/>,document.getElementById("root"))
