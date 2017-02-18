'use strict';

import React from 'react';

const About = React.createClass({
    render: function() {
        return <div className="about">
            <p>
                Hosted with &#10084; on <a href="https://github.com/snskrt/desktop-dict" target="_blank">GitHub</a>.
                <br/>
                Post there any issues or email Daniel at <a href="mailto:dan.kocherga@gmail.com">dan.kocherga@gmail.com</a>
            </p>
        </div>
    }
});

export default About;
