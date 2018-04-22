import React from 'react';
import {dbase} from './fbase';
import axios from 'axios';
import logo from './logo.png';
import {Avatar} from "material-ui";

const database = [
    {
        name:"Rokeya Jones",
        url: "https://www.linkedin.com/in/rokeyajones/",
        image: "https://media.licdn.com/dms/image/C4E03AQEyKh0pFPs0Ow/profile-displayphoto-shrink_800_800/0?e=1529542800&v=beta&t=JJfX8fZqGVAELO-myeBW6qTwyKur8BnPYeMBPOBbBz8",
        location: "United States",
        subText: "Director, WW CSE - Academic Evangelism (North America) at Microsoft"
    },
    {
        name:"Sascha Eder",
        url: "https://www.linkedin.com/in/saschajeder/",
        image: "https://media.licdn.com/dms/image/C5603AQHNSt0er_j9pQ/profile-displayphoto-shrink_800_800/0?e=1529542800&v=beta&t=oV955pQ-T--Ds09T3empbrQEx4Q6dROjjgRUciMThTQ",
        location: "United States",
        subText: "Chief Financial Officer at NewtonX"
    },
    {
        name:"Wilson Hung",
        url: "https://www.linkedin.com/in/wilson-hung/",
        image: "https://media.licdn.com/dms/image/C4E03AQHp2GUDfxsOzA/profile-displayphoto-shrink_800_800/0?e=1529542800&v=beta&t=PlIlcqirNL3V91zxgbegqE-b5Qoqy1iwgwN9ypIK9Hw",
        location: "United States",
        subText: "Head of Software Engineering (AVP), Dealertrack F&I Solutions at Cox Automotive Inc."
    },
    {
        name:"Ying Zhou",
        url: "https://www.linkedin.com/in/ying-zhou-8a26503/",
        location: "United States",
        subText: "Program Director at Tech Incubator at Queens College. Tech Talent Pipeline Program Manager at Queens College."
    },
    {
        name:"Charles LaCalle",
        url: "https://www.linkedin.com/in/charleslacalle/",
        image: "https://media.licdn.com/dms/image/C4D03AQEth8V6FRn5dg/profile-displayphoto-shrink_800_800/0?e=1529542800&v=beta&t=taMOMxRGggfZ8DQehQP6VGcN3U6kgYnZFf6ld4MaHNI",
        location: "United States",
        subText: "Associate at Dreamit Ventures Associate at Flatiron Investors"
    },
    {
        name:"Ryan Brack",
        url: "https://www.linkedin.com/in/ryanbrack/",
        image: "https://media.licdn.com/dms/image/C5603AQFCkMR5HbLa6g/profile-displayphoto-shrink_800_800/0?e=1529546400&v=beta&t=AGwPBdGh7iG1VB5q2zXsI4w-tXYdKGvYfcqmlqsW7e8",
        location: "United States",
        subText: "Founder at Future Forward Partners Advisor at Rentlogic"
    },
    {
        name:"Corey Neufville",
        url: "https://www.linkedin.com/in/corey-neufville-3424346b/",
        image: "https://media.licdn.com/dms/image/C5603AQHzDD1nZfTddg/profile-displayphoto-shrink_800_800/0?e=1529542800&v=beta&t=O5pMF0cE_YuR9LuB5F0dOpDmim7t7JeDFBF4Q71HVF8",
        location: "Greater New York City Area",
        subText: "Media Solutions Manager at Facebook"
    },
    {
        name:"Audrey Adams",
        url: "https://www.linkedin.com/in/audrey-adams-a80b6112/",
        location: "United States",
        subText: "Executive Director at Morgan Stanley"
    },
    {
        name: "Zoie Zhu",
        url: "https://www.linkedin.com/in/zoie-zhu-7b218472/",
        image: "https://media.licdn.com/dms/image/C4E03AQEmw9wxSi6ipQ/profile-displayphoto-shrink_800_800/0?e=1529546400&v=beta&t=Uxmlsp6xs1mzEbQJOw9554BLS3YpBdIjBHHOqX0KRDY",
        location: "San Francisco Bay Area",
        subText: "User Experience Researcher at Cornell University"
    },
    {
        name: "Mustahiq Ahmed",
        url: "https://www.linkedin.com/in/mustahiq/",
        location: "Greater New York City Area",
        subText: " "
    },
    {
        name: "Kai Hang Chen",
        image: "https://media.licdn.com/dms/image/C4D03AQFrPJ9DUMVa3w/profile-displayphoto-shrink_800_800/0?e=1529546400&v=beta&t=AbajHKWLr387TYbj_5FMKz1tfmEeqbMy-BWhb5ap65o",
        url: "https://www.linkedin.com/in/kaihangchen23429398/",
        location: "Greater New York City Area",
        subText: "College Coach at International High School at Prospect Heights"
    },
    {
        name: "Natan Kibret",
        image: "https://media.licdn.com/dms/image/C4E03AQGrBT2cu9U0lw/profile-displayphoto-shrink_800_800/0?e=1529546400&v=beta&t=Ea0nlQT67f1oGdusbMAC41MpoOKZU20dRn0_rOrG46g",
        url: "https://www.linkedin.com/in/natankibret/",
        location: "Greater Boston Area",
        subText: "Technical Analyst at Computer Trust Corp\n" +
        "Project Manager at Enza\n" +
        "Logistics Coordinator and Curriculum Developer at Enza"
    },
    {
        name: "Alexander Gredysa",
        image: "https://media.licdn.com/dms/image/C5603AQEU6vOEdoHEZA/profile-displayphoto-shrink_800_800/0?e=1529546400&v=beta&t=MBqcYVM2Usrdnx0GmcdEukK6V1CpofAVWE78kURJTrM",
        url: "https://www.linkedin.com/in/gredysa/",
        location: "United States",
        subText: "Co-Founder / CEO at VR Global"
    },
    {
        name: "Alex Ang",
        image: "https://media.licdn.com/dms/image/C4D03AQFnIHToXtJKqw/profile-displayphoto-shrink_200_200/0?e=1529546400&v=beta&t=kytvXh1ecDPty_8GeBVp1i53z6TLGFtkRAAQyc174pg",
        url: "https://www.linkedin.com/in/alex-ang/",
        location: "United States",
        subText: "Assistant To The Regional Manager at Kenco Services LLC"
    },
    {
        name: "Weeks Mensah",
        image: "https://media.licdn.com/dms/image/C5603AQG0QtGJ1gxEhA/profile-displayphoto-shrink_800_800/0?e=1529550000&v=beta&t=IqtpmMfRdxOwMpFjYUqyew1FzbvcY8wt0m_ILGjveOk",
        url: "https://www.linkedin.com/in/weeksmensah/",
        location: "United States",
        subText: "Co-Founder at Enza Academy"
    }
];

const postOptions = {
    method: 'POST',
    url: 'https://eastus.api.cognitive.microsoft.com/face/v1.0' + '/identify?',
    headers: {
        'Content-Type': 'application/octet-stream',
        'Ocp-Apim-Subscription-Key': '401b3c51709d49e2bced6e84d6f3bdb6',
    }
};

class UploadPicture extends React.Component {
    onImageFileChange = (person) => (event) => {
        if (event.target.files.length > 0) {
            dbase.ref('url').set(person);
        }
    };

    componentDidMount() {
        database.forEach(person => {
            console.log(JSON.stringify({
                name: person.name,
                userData: JSON.stringify(person)
            }));
        })
    }

    upload = (event) => {
        this.props.history.push('/');
    };

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <header className="App-header" onClick={this.upload}>
                    <div style={{display: 'inline-block', paddingRight: 20}}><img src={logo} style={{height: '48px', }}/></div>
                    <div style={{display: 'inline-block'}}><h1 className="App-title" style={{lineHeight: '48px'}}>WhoDis</h1></div>
                </header>
                <div style={{paddingTop: 100}}>
                    {
                        database.map(person => {
                            return (person.image) ? (
                                <div>
                                    <div style={{display: 'inline-block'}}><Avatar src={person.image}/></div>
                                    <div style={{display: 'inline-block'}}>{person.name}</div>
                                    <div style={{display: 'inline-block'}}>
                                        <input
                                            type="file"
                                            style={{
                                                fontSize: 'large',
                                                width: '50%',
                                                padding: '12px 20px',
                                                margin: '8px 0',
                                                boxSizing: 'border-box',
                                                backgroundColor: '#ccc'
                                            }}
                                            accept="image/*"
                                            onChange={this.onImageFileChange(person)}
                                        />
                                    </div>
                                </div>
                            ) : null;
                        })
                    }
                </div>
            </div>
        );
    }
}

export default UploadPicture;
