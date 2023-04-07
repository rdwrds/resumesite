import React, {Component} from 'react';

class Navbar extends Component
{
    constructor(props)
    {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick()
    {

    }

    render()
    {
      let onClickStyle = {
            backgroundColor: 'var(--color-secondary-2-0)'
        }; 

        return (<ol className='navbar'>
        <li>Home</li>
        <li>Project</li>
        <li>Resume</li>
        <li>About Me</li>
    </ol>);

    }
}

export default Navbar;