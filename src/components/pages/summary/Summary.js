import React, { Component } from 'react';

class Summary extends Component {
    render() {
        return (
            <div>
               <div className="card teal lighten-3 z-depth-0">
                   <div className="card-content">
                       <h6 className="no-pad mt-bottom brown-text text-darken-4">
                           <strong>ABOUT ME</strong>
                       </h6>
                       <p className="pt brown-text text-darken-4">
                        Full Stack Web Developer who’s ready to implement interesting difficult tasks!
                        He has strong programming skills and a passion for developing applications.
                        He has experience in working from small team to big successful company. 
                        Have done numerous projects involving front and back end applications, framework and
                        middleware, GUI and gameplay development.
                       </p>
                   </div>
               </div>
            </div>
        )
    }
}

export default Summary;