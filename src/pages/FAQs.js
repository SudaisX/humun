import { React, useEffect } from 'react';
import { Container, Accordion } from 'react-bootstrap';

const FAQs = ({ setActive }) => {
    useEffect(() => {
        document.title = 'FAQs | HUMUN';
        setActive([false, false, false, false, false, true]);
    }, [setActive]);
    return (
        <>
            <Container className='content-container'>
                <h2 className='page-title'>
                    <span className='wavy'>FAQs</span>
                </h2>
                <Accordion defaultActiveKey='12'>
                    <Accordion.Item eventKey='12'>
                        <Accordion.Header>
                            What are the COVID-19 SOPs protocols that I am expected to abide by?
                        </Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>
                                    All delegates are supposed to carry their original vaccination
                                    card with them throughout the entirety of the event.
                                </li>
                                <li>
                                    Please note, that you are supposed to wear a mask at all times,
                                    (surgical masks, cloth masks, N-95 masks without a filter).
                                    Please do carry spare masks with you.
                                </li>
                                <li>
                                    N-95 masks with filters are not allowed since they barely
                                    prevent the spread of the COVID-19 virus.
                                </li>
                                <li>
                                    All delegates are supposed to get their temperature checked at
                                    the entrance, and are expected to respect the team members and
                                    their decision. Any person with a temperate above 98 will not be
                                    allowed to enter campus premises.
                                </li>
                                <li>
                                    In case of showing COVID-19 symptoms. Please report to your
                                    nearest HUMUN IV team member.
                                </li>
                                <li>
                                    Maintain social distancing. Try to prevent shaking hands,
                                    fist-bumping, or hugging the people around you.
                                </li>
                                <li>
                                    Delegates will be provided with individual delegate packages
                                    that will have stationary and other required materials. Please
                                    try to avoid the sharing of stationery, laptops, and other
                                    things that might transmit germs.
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey='0'>
                        <Accordion.Header>
                            What is the COVID-19 vaccination policy for HUMUN IV?
                        </Accordion.Header>
                        <Accordion.Body>
                            All delegates, members of the secretariat, coaches, and institutional
                            representatives have to be fully vaccinated by the 4th of February 2022.
                            Unvaccinated people will not be allowed to access the Habib University
                            campus premises at any cost unless there is a very severe health
                            concern. In the case of which, the relevant person is supposed to fill
                            in the health concern form so that the HUMUN IV team can evaluate their
                            application, and decide the outcome.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='1'>
                        <Accordion.Header>
                            How many people from one delegation can be in each committee?
                        </Accordion.Header>
                        <Accordion.Body>
                            Only one member of each delegation can be in each committee. We do not
                            have any double delegate committees in this edition of HUMUN.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey='2'>
                        <Accordion.Header>What is the dress code for HUMUN IV?</Accordion.Header>
                        <Accordion.Body>
                            There is no official dress code or appearance policy for HUMUN. However,
                            during the conference, members of the secretariat and delegates are
                            expected to subscribe to formal dressing, (Shalwar Kameez is allowed).
                            In a formal setting, please avoid wearing jeans, graphic t-shirts or
                            shirts, or any clothing with symbols/imagery pertaining to any political
                            or religious affiliation. Delegates and institutional representatives
                            should avoid any clothing exclusive to any institution or (debate) team
                            as well.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey='3'>
                        <Accordion.Header>What are the early bird registrations?</Accordion.Header>
                        <Accordion.Body>
                            Early Bird registrations are the registrations that happen within the
                            specified time frame in the initial few days after the registrations
                            open. By registration during the early bird period, delegates get the
                            incentive of paying a discounted registration fee to us, as compared to
                            the usual fee.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey='4'>
                        <Accordion.Header>
                            How many days does it take for your team to confirm our registrations
                            after we fill in the registration form?
                        </Accordion.Header>
                        <Accordion.Body>
                            On average HUMUN takes around a week to process the registrations.
                            Please check the provided Head Delegate email address and the junk/spam
                            folder during that time. In case you haven’t heard back from us, please
                            feel free to reach out on our official email.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey='5'>
                        <Accordion.Header>What is the payment procedure?</Accordion.Header>
                        <Accordion.Body>
                            Once we receive your registration, we will reach out to you on the
                            provided head delegate’s email address with the details of the bank
                            transfer. In case of any concerns and difficulty making the payment,
                            please reach out to us so that we can provide you with our timely
                            assistance.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey='6'>
                        <Accordion.Header>
                            When will we start getting our committee allotments?
                        </Accordion.Header>
                        <Accordion.Body>
                            After you pay the registration fee and send us a softcopy of the payment
                            proof, we will send you a confirmation email from our end. The
                            allotments will be sent within a week after that.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey='7'>
                        <Accordion.Header>
                            Are socials included in the registration fee?
                        </Accordion.Header>
                        <Accordion.Body>
                            No, as of now we haven’t announced any socials. However, delegates will
                            have to buy the social tickets separately, if they are scheduled to take
                            place.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey='8'>
                        <Accordion.Header>
                            How many delegations can an institute register?
                        </Accordion.Header>
                        <Accordion.Body>
                            There is no limit to the number of delegations that an institute might
                            register. However, priority will only be given to the first
                            delegations/A delegation of each institute.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey='9'>
                        <Accordion.Header>
                            How can individual delegates participate in HUMUN IV?
                        </Accordion.Header>
                        <Accordion.Body>
                            Unfortunately, due to COVID-19 protocols, we are only opening
                            registrations for delegations. However, you can keep a check on HUMUN IV
                            social media handles to get notified about the registrations for
                            individual delegates opening in near future.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey='10'>
                        <Accordion.Header>
                            How can we reach out to any member of the executive council in case of
                            urgent queries, or concerns?
                        </Accordion.Header>
                        <Accordion.Body>
                            Please drop an email at{' '}
                            <a href='mailto:humun@habib.edu.pk' className='email'>
                                humun@habib.edu.pk
                            </a>{' '}
                            humun@habib.edu.pk so that a relevant person can respond back to you.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey='11'>
                        <Accordion.Header>
                            Do we get to choose or change our committees/country’s allotments?
                        </Accordion.Header>
                        <Accordion.Body>
                            No, you do not. The allotments that will be sent to you via your email
                            once the payment is made are final and binding. No requests for changes
                            will be accommodated unless deemed necessary by the HUMUN secretariat.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </>
    );
};

export default FAQs;
