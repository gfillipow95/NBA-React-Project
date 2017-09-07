import React, {Component} from 'react';

//Components
import HighlightSlider from './slider';
import Subscription from './subscription';
import Blocks from './blocks';
import Poll from './poll';

const HOME_URL = `http://localhost:3004/home`;

class Home extends Component{

    constructor(props){
        super(props);

        this.state={
            home_state:'',
        }
    }

    componentDidMount(){
        fetch(HOME_URL, {
            method: "GET"
        })
        .then(response => response.json())
        .then(json => {
            this.setState({
                home_state: json
            })
        })
    }

    render(){
        return(
            <div>
                <HighlightSlider sliderElements={this.state.home_state.slider} />
                <Blocks blockInfo = {this.state.home_state.blocks}/>
                <Poll/>
                <Subscription />
            </div>
        )
    }

}

export default Home;