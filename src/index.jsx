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
    
    
    
//    setKeys(obj) {
//        var keys = [];
//        for (let x in obj) {
//            console.log(x);
//            console.log(obj);
//            keys.push(x);
//            console.log(keys);
//        }
//        return keys;
//    } 
    //this is if the data is an object that contains arrays. Use it to produce arrays to map in the rendering
    
    
    componentDidMount() {
    }
    
      render() {
        return (
            <div className='container-fluid'>
            <div className='row'>
                <div className='col'>
                    <h1 className='mx-2 my-4'>Summer Resources for Kids!</h1>
                </div>
            </div>
            <div className='row'>
            {this.props.data.map(function(item, index) {
                console.log(item);
                    
                    let currKey = item + index;
                    return (
                        <div key={currKey} className='album-cover col-12 col-lg-4 col-sm-6'><a href={item.href} target='_blank'><img src={item.src} alt='new image'/><span className='caption'><strong>{item.name}</strong></span></a></div>
                        )
                          
            }.bind(this))}
            </div>
            </div>
        )
    }
}

ReactDOM.render(<App data={data}/>, document.getElementById('root'));