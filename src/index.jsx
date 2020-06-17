import React from 'react';
import ReactDOM from 'react-dom';
import data from './data';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
//        this.chooseArtist = this.chooseArtist.bind(this);
         
    }
    
    
    
    setKeys(obj) {
        var keys = [];
        for (let x in obj) {
            keys.push(x);
        }
        return keys;
    }
    componentDidMount() {
    }
    
      render() {
        return (
            <div className='container-fluid'>
            <div className='row'>
            {this.setKeys(this.props.data).map(function(item, index) {
                
                return this.props.data[item].map(function(subItem, subIndex) {
                    let currKey = item + index + subIndex;
                    return (
                        <div key={currKey} className='album-cover col-4 col-sm-3 col-md-2'><img src={subItem} alt='new image'/></div>
                        )
                           });
            }.bind(this))}
            </div>
            </div>
        )
    }
}

ReactDOM.render(<App data={data}/>, document.getElementById('root'));