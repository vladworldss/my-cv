import React, { Component } from 'react';


class Skill extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            progress: props.progress,
        };
    }

    render(){
        return (
            <div className="col m6 s12">
                <p className="grey-text text-lighten-5">{this.state.name}</p>
                <div className="progress white">
                    <div className="determinate brown lighten-3" style={{width: `${this.state.progress}%`}}></div>
                </div>
            </div>
        )
    }
}

class Skills extends Component {
    render() {

        return (
            <div>
               <div className="card teal lighten-1 z-depth-0">
                   <div className="card-content">
                        <h6 className="white-text">
                            <strong> # PROFESSIONAL SKILLS</strong>
                        </h6>
                        <hr/>
                        <div className="row pt">
                        <Skill name="C/C++" progress="53" />
                        <Skill name="Python" progress="89" />
                        <Skill name="Pydantic/Typing" progress="81" />
                        <Skill name="Django" progress="73" />
                        <Skill name="Falcon" progress="79" />
                        <Skill name="Aiohttp" progress="37" />
                        <Skill name="FastApi" progress="71" />
                        <Skill name="ReactJS" progress="57" />
                        <Skill name="html/css" progress="55" />
                        <Skill name="Nginx" progress="53" />
                        <Skill name="Docker" progress="69" />
                        <Skill name="PostgreSQL" progress="65" />
                        <Skill name="Git/SVN" progress="77" />
                        <Skill name="TortoiseORM" progress="65" />
                        <Skill name="Sqlalchemy" progress="53" />
                        </div>
                   </div>

               </div>
            </div>
        );
    }
}
export default Skills;