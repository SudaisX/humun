import { React, useEffect } from 'react';
import { Container } from 'react-bootstrap';

const About = ({ setActive }) => {
    useEffect(() => {
        document.title = 'About | HUMUN';
        setActive([false, true, false, false, false]);
    }, [setActive]);
    return (
        <Container className='content-container'>
            <h2 className='page-title'>About</h2>
            {/* <div className='committee_types'>
                <a href='#hdu'> 1. HDU </a>
                <a href='#history'> 2. History </a>
            </div> */}
            <div className='about-container'>
                <h3 className='committee_type' id='hdu'>
                    Habib Debate Union
                </h3>

                <img src='/images/hdu.png' alt='' style={{ maxWidth: '300px' }} />
                <p className='about-body-text'>
                    The Habib Debate Union is Habib University’s leading student society providing
                    students with a platform to go into different formats of public speaking. HDU
                    participates in all formats such as Parliamentary Debates and Model United
                    Nations, and public speaking events both locally and internationally. For the
                    past few years, Habib has made a mark on the local Parliamentary Debating
                    circuit ranking at tournaments such as IBADC, CBMDC, BALDC, and ZUDC, and has
                    won awards such as the best new team at ZUDC and winning the entirety of JSMUDC.
                    Moreover, our teams also made breaks at numerous international tournaments
                    including but not limited to United Asians Debating Championships, Australasian
                    Debating Championships, Doxbridge Worlds, MONASH, and Asian British
                    Parliamentary. Our students have also adjudicated and judged out rounds and
                    finals at Pakistan Junior and Senior Nationals to name a few. <br />
                </p>
                <p className='about-body-text'>
                    HDU has also made its mark in the MUN circuit with the start of Habib’s first
                    Model United Nations conference back in October 2017. The conference after its
                    three iterations has successfully provided an inclusive platform to all MUN and
                    debate aspirants. Moreover, we sent out our first delegation to Harvard World
                    MUN 2021, where our delegates won two Honorable Mention awards.
                </p>
                <p className='about-body-text'>
                    Apart from this, our team conducts weekly training sessions and practice debates
                    to help our members gain confidence, practice and polish their debate skills,
                    and strengthen the debate community at HU. The Debate Union orchestrates two of
                    Habib’s biggest events every year. The Habib University Debating Championship,
                    whose fourth iteration happened to be HU's first international student-led
                    event, hosted 44 teams from all over the globe.
                </p>

                <h3 className='committee_type' id='history' style={{ marginBottom: '30px' }}>
                    History of HUMUN
                </h3>
                <p className='about-body-text'>
                    Three years after the establishment of Habib University, members of one of the
                    most leading student societies of HU came forth with the initiative of hosting
                    the institute’s first-ever Model United Nations iteration in 2017. The
                    conference was one of the first student-led flagship events hosted by Habib
                    University and successfully managed to host, and engage approximately 250
                    students in a dynamic discourse. The conference was also a success due to its
                    extremely competent pool of secretariat, and the extremely transparent, and
                    academically enriching experience it offered to the delegates. In the next two
                    iterations of the MUN, HUMUN only grew to become one of Pakistan’s leading MUN
                    conferences due to its statement of inclusivity, and its centric approach
                    towards the betterment of academic transcendence. HUMUN lll was successful in
                    hosting an approximate of 500 delegates, adhering towards its approach of
                    prioritising the quality of debate that the delegates bring to the table, over
                    the number of delegates it yields in every iteration. Moreover, the previous
                    iteration of HUMUN was also successful in establishing the social responsibility
                    program of HUMUN, where they collaborated with The Citizens Foundation and
                    managed to bring in two delegations from TCF, after providing them with
                    extensive MUN training. The conference, despite being relatively new in the
                    local, and international MUN circuits, has not only provided the external
                    delegates, and students with a platform where they can freely articulate their
                    ideas, and get support whilst doing so, but also empowered the students of Habib
                    University to go beyond the box by exploring their capabilities, polishing their
                    existing skills.
                </p>
            </div>
        </Container>
    );
};

export default About;
