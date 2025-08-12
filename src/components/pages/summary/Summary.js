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
                       Experienced Full Stack Developer with a proven ability to tackle complex engineering tasks
                       and build scalable web applications. Proficient in both back-end and front-end development,
                       and well-versed in modern architectural approaches, microservices, CI/CD practices, and robust
                       coding standards.
                       </p>
                       <p>
                       Successfully contributed to teams ranging from small agile groups to large
                       international corporations across fintech, game development and telecommunications industries.
                       </p>
                   </div>
               </div>
            </div>
        )
    }
}

export default Summary;