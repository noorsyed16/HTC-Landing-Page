import React, { useState } from 'react';
import './Homepage.css';
import aws from '../images/aws.png';
import keyera from '../images/keyera.png';
import ey from '../images/ey.png';
import haskayne from '../images/haskayne.jpg';

function Mission() {

    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    

    return (
        <div className = "missionTable">
        <table style = {{borderRadius: '0px'}}>
            <tr>
                <td rowSpan={2} style={{width: '60%'}}>
                    <div className = "missionBox" onMouseEnter={() => setIsHovered1(true)} onMouseLeave={() => setIsHovered1(false)}
                        style={{
                            borderColor: isHovered1 ? '#F2D178' : '#5C5C5C',
                            backgroundColor: isHovered1 ? '#F2D178' : '#5C5C5C',
                            color: isHovered1 ? '#5C5C5C' : 'white',
                            transition: 'border-color 0.3s ease, background-color 0.3s ease, color 0.3s ease',
                            height: '94%'
                        }}>

                        <h1>Our Mission</h1>
                        <p>
                        We want to bridge the gap between academia and industry by facilitating meaningful 
                        connections between employers and students interested in technology.
                        <br></br> 
                        <br></br>
                        Through tailored events, 
                        workshops, and case competitions, we aim to raise awareness of the multitude of career pathways
                        available, while equipping our members with both technical skills and essential soft skills.
                        <br></br> 
                        <br></br>
                        We are committed to providing a nurturing environment where students in need receive the 
                        support and guidance necessary to excel in their academic and professional endeavours
                        </p>
                        <br></br>
                        <img src={haskayne} alt="Haskayne Image" style={{width: '100%'}}></img>
                    </div>
                </td>
                <td>
                <div className = "missionBox" onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)}
                        style={{
                            borderColor: isHovered2 ? '#F2D178' : '#5C5C5C',
                            backgroundColor: isHovered2 ? '#F2D178' : '#5C5C5C',
                            color: isHovered2 ? '#5C5C5C' : 'white',
                            transition: 'border-color 0.3s ease, background-color 0.3s ease, color 0.3s ease',
                        }}>                        

                        <h1>Our Vision</h1>
                        <p>
                            <ul>
                                <li>
                                Foster a dynamic community where business students interested in technology thrive
                                </li>
                                <li>
                                Connect aspiring professionals with diverse industries, empowering them with essential skills
                                </li>
                                <li>
                                Champion inclusivity and support for all members.
                                </li>
                            </ul>
                        </p>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className = "missionBox" onMouseEnter={() => setIsHovered3(true)} onMouseLeave={() => setIsHovered3(false)}
                        style={{
                            borderColor: isHovered3 ? '#F2D178' : '#5C5C5C',
                            backgroundColor: isHovered3 ? '#F2D178' : '#5C5C5C',
                            color: isHovered3 ? '#5C5C5C' : 'white',
                            transition: 'border-color 0.3s ease, background-color 0.3s ease, color 0.3s ease',
                        }}>   
                        <h1>Corporate Partners</h1>

                        <div className="partnerImages">
                        <img src={aws} alt="AWS Logo" />
                        <img src={keyera} alt="Keyera Logo" />
                        <img src={ey} alt="EY Logo" />
                        </div>

                    </div>
                </td>
            </tr>
        </table>

        </div>
    );
}

export default Mission;