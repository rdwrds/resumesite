import React, {Component} from 'react';
import Board from './Board';
import Navbar from './Navbar';

class Home extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return <div className='home'> <Navbar /> <Board /></div>;
    }
}

export default Home;