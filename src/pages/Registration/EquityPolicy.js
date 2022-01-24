import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

const EquityPolicy = ({ setActive }) => {
    useEffect(() => {
        document.title = 'Equity Policy | HUMUN';
        setActive([false, false, false, false, true, false, false]);
    }, [setActive]);
    return (
        <Container className='content-container sans-font'>
            <h2 className='page-title'>
                <span>Equity Policy</span>
            </h2>
            <h1 className='committee_type mb-4'>Code of Conduct</h1>

            <ol type='1' className='lemon-font'>
                <li>
                    <p>
                        <span className='lemon-font' style={{ marginBottom: '15px' }}>
                            Language
                        </span>
                    </p>
                    <p>
                        The conference’s official language is English, i.e. all formal
                        communication, documentation, and the debate itself will be operated in
                        English. All of the committees (General Assemblies, ECOSOC, and Specialized)
                        are based on English except for the Pakistan National Assembly- which is
                        bilingual (English and Urdu). If any delegate or the dais member requires
                        assistance in matters related to English language usage, please contact the
                        HUMUN Secretariat.{' '}
                    </p>
                </li>

                <li>
                    <p>
                        <span className='lemon-font' style={{ marginBottom: '15px' }}>
                            Individual Conduct
                        </span>
                    </p>
                    <p>
                        HUMUN has a zero-tolerance policy for any maligned use of language in terms
                        of swearing, slandering, harmful or derogatory remarks, slurs, disparaging
                        or any other remarks that are incendiary to other individuals involved.{' '}
                        <br />
                        While the same rule applies to the speeches and the debates overall,
                        opinions based on country/individual stance are not included in this clause.
                        If the delegates are found using inflammatory language during their speeches
                        that are disparaging to individuals and their identities, HUMUN reserves the
                        right to take appropriate action.
                        <br /> Provisions on appropriate action include but are not limited to
                        suspension from the committee, official complaint to the school/institution
                        representative, and exclusion from the awards list. The dais members are
                        also under the obligation to report such events to the equity team for
                        further investigation and processing.
                    </p>
                </li>

                <li>
                    <p>
                        <span className='lemon-font' style={{ marginBottom: '15px' }}>
                            Child Safety
                        </span>
                    </p>
                    <p>
                        HUMUN reserves the right to mark the minors involved in the conference for
                        safety and child protection concerns. During the committee proceedings, the
                        dais will be under the obligation to take verbal consent from the minors
                        present when the debate goes to sensitive topics including providing trigger
                        warnings.
                        <br /> Additionally, if a delegation consisting of minors wants an
                        institutional representative (other than the debate coach) to accompany
                        them, please reach out to the HUMUN team for appropriate arrangements. In
                        the case of any equity concerns, our equity officers will be present
                        throughout the conference to facilitate the equity complaint process for the
                        minors.
                    </p>
                </li>
                <li>
                    <p>
                        <span className='lemon-font' style={{ marginBottom: '15px' }}>
                            Dress Code
                        </span>
                    </p>
                    <p>
                        There is no official dress code or appearance policy for HUMUN. However,
                        during the conference, members of the secretariat and delegates are expected
                        to subscribe to formal dressing, (Shalwar Kameez is allowed). In a formal
                        setting, please avoid wearing jeans, graphic t-shirts or shirts, or any
                        clothing with symbols/imagery pertaining to any political or religious
                        affiliation. Delegates and institutional representatives should avoid any
                        clothing exclusive to any institution or (debate) team as well.{' '}
                    </p>
                </li>
                <li>
                    <p>
                        <span className='lemon-font' style={{ marginBottom: '15px' }}>
                            Courtesy
                        </span>
                    </p>
                    <p>
                        HUMUN is proud to call itself a safe debating ground for all the individuals
                        involved. During the course of the conference, delegates are expected to
                        abide by the rules outlined in Individual Conduct strictly. In addition to
                        that:
                    </p>
                    <ol type='a'>
                        <li>
                            <p>
                                Habib University is a safe and inclusive campus for everyone with
                                respect to their beliefs, gender identity, sexual orientation, race,
                                and other elements pertaining to individual identity. All the
                                individuals involved in the conference (Habib and non-Habib parties)
                                are expected to remain respectful to each other within and outside
                                the committee settings. Maligning, mocking, disrespecting, using
                                gendered or sexual pejoratives is strictly prohibited during HUMUN.
                                In the case of any issues, please make sure to contact any member of
                                the HUMUN team or equity officers.
                            </p>
                        </li>
                        <li>
                            <p>
                                During the debate proceedings, it is highly advisable for the
                                delegates and the dais members to use gender-neutral pronouns and
                                language in general or while addressing each other. The dais and
                                delegates are encouraged to specify their pronouns for personal
                                communication or the unmoderated caucus. However, by no means, an
                                individual should be coerced into specifying their pronouns in a
                                public setting. If there are any cases regarding deliberate or
                                intentional misgendering (when the personal pronouns have been
                                specified in a public setting), please report to an equity officer.
                                Lastly, delegates or any party involved in HUMUN are not allowed to
                                share anyone’s preferred pronouns with individuals outside the
                                conference.{' '}
                            </p>
                        </li>
                        <li>
                            <p>
                                In the case of accidental or unintentional misgendering of an
                                individual, please immediately apologize. At HUMUN, we understand
                                that these issues are common but they should not be recurring.
                                Noting and internalizing gender-neutral language throughout the
                                conference is the only way to overcome these issues.{' '}
                            </p>
                        </li>
                        <li>
                            <p>
                                The delegates and members of the dais are recommended to use
                                gender-neutral or non-binary terms to address the committee
                                collectively during any formal or informal proceedings and speeches.
                                While we understand that using terms like ‘ladies and gentlemen’ or
                                ‘boys and girls’ are standard terms of address, more inclusive
                                non-binary alternatives are available. Such alternatives include but
                                are not limited to ‘honourable delegates’, ‘your excellencies’,
                                ‘people of the world’, etc. In an informal setting, using ‘everyone’
                                instead of gendered language is also very viable.{' '}
                            </p>
                        </li>
                        <li>
                            <p>
                                At HUMUN, the use of pejorative language is an equity violation.
                                During the conference, if any individual involved feels disrespected
                                or unsafe pertaining to their identity’s protected attributes (race,
                                gender, sexual orientation, etc.), please do not hesitate to report
                                to file an equity complaint. If there are equity complaints
                                regarding the secretariat or HUMUN organising and host team member,
                                the equity violation is applicable here too. In such cases, please
                                do not hesitate to file an equity complaint. The processing of
                                equity complaints regarding any Habib University-affiliated member
                                is outside the scope of the HUMUN secretariat, directorate, and
                                organising team.
                            </p>
                        </li>
                        <li>
                            <p>
                                Throughout the course of the conference, HUMUN realises that the
                                language utilised or topics discussed could be case-sensitive in
                                manifold ways. During such situations, HUMUN maintains that trigger
                                warnings apply prior to the speeches or the initiation of such
                                topics. All the individuals involved are supposed to explicitly
                                indicate the application of trigger warnings before starting any
                                sort of communication (including speeches) involving distressing
                                themes.
                            </p>
                        </li>
                    </ol>
                </li>
                <li>
                    <p>
                        <span className='lemon-font' style={{ marginBottom: '15px' }}>
                            Drug, Smoking and Alcohol Policy
                        </span>
                    </p>
                    <ol type='a'>
                        <li>
                            <p>
                                Smoking* (cigarettes, vaping, e-cigarettes, etc.), drinking
                                alcoholic beverages, and any use of legal or illegal substances are
                                not allowed on Habib University premises.{' '}
                            </p>
                        </li>
                        <li>
                            <p>
                                The only exception to the ‘no-smoking’ policy is the secretariat
                                members, directorate, host team (HU students), institutional
                                representatives (debate coaches).{' '}
                            </p>
                        </li>
                        <li>
                            <p>
                                There will only be certain spots designated as the smoking area for
                                the secretariat and the directorate members, which are not
                                accessible to the delegates. The designated spots are called Baithak
                                and Mehfil on the Habib University campus. The organising team
                                (security and liaison) will be available to guide everyone at the
                                conference. Delegates are not allowed to smoke on the premises under
                                any condition whatsoever.
                            </p>
                        </li>
                        <li>
                            <p>
                                HUMUN will uniformly apply the drug use policy to everyone involved
                                in the conference regardless of their position or role in the
                                conference. External or invited members of the secretariat or
                                directorate are included in this rule as well.{' '}
                            </p>
                        </li>
                        <li>
                            <p>
                                Substance abuse, use of illicit drugs or smoking substances on
                                campus and entering the conference premises under the influence is
                                strictly prohibited. Under this policy, voluntarily or involuntary
                                exporting cigarettes, alcohol, or substances to the delegates and
                                minors is firmly prohibited and considered an equity violation.{' '}
                            </p>
                        </li>
                        <li>
                            <p>
                                The sale or purchase of illicit drugs or any alcoholic beverage is
                                strictly prohibited on the Habib University campus.{' '}
                            </p>
                        </li>
                        <li>
                            <p>
                                In the case of violation of the policies mentioned above, Habib
                                University and HUMUN reserve the right to take appropriate actions
                                that are not limited to:{' '}
                            </p>
                            <ul>
                                <li>
                                    <p>
                                        Immediate removal of the parties found in violation involved
                                        from the campus indefinitely;
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Expulsion from the conference on an immediate basis, if
                                        necessary;{' '}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Blocklisting on the participation (in any capacity) in other
                                        iterations of HUMUN and any Habib Debate Union event or
                                        competition;{' '}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Official complaint to the school/college/institution
                                        management and representative;
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Plausible banning from particular campus spaces and the
                                        committee sessions;
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        If necessary and found pertinent, HUMUN will also consider
                                        immediate expulsion of the delegations (to which involved
                                        parties are affiliated);
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Immediate confiscation of illicit drugs or banned substances
                                        by the security team of HUMUN;
                                    </p>
                                </li>
                                <li>
                                    <p>Verbal or written official warnings, if applicable. </p>
                                </li>
                            </ul>
                        </li>
                    </ol>
                </li>
                <li>
                    <p>
                        <span className='lemon-font' style={{ marginBottom: '15px' }}>
                            Public Display of Affection (PDA)
                        </span>
                    </p>
                    <p>
                        HUMUN recognises that genuine display of affections (romantic or otherwise)
                        and intimate gestures are very natural to human emotions. The scope of PDA
                        that is strictly prohibited at Habib University pertains to sexual
                        behaviour, sexual acts, any display of nudity, and intimate physical
                        contact. However, consensual greeting/ consoling/congratulatory hug, quick
                        or brief kiss and handshake, handholding and linking arms are not considered
                        as acts of PDA under the HUMUN policy. Please note that HUMUN’s PDA policy
                        is imperative for maintaining a safe space, i.e. the notion of consent is
                        upheld for every individual (especially minors) involved. Thus, abiding by
                        the PDA policy holds the moral responsibility for everyone involved in the
                        conference.{' '}
                    </p>
                </li>
                <li>
                    <p>
                        <span className='lemon-font' style={{ marginBottom: '15px' }}>
                            Use of technology, electronic aids and responsible use of social media
                        </span>
                    </p>
                    <ol type='a'>
                        <li>
                            <p>
                                Delegates are not allowed to use any electronic devices, including
                                laptops, phones, e-book readers etc., when the committee is in a
                                formal session. Unless the dais specifies otherwise, the rule has to
                                be followed firmly. At the discretion of the dais, delegates might
                                be allowed to use their electronic devices inside the committee room
                                during the process of documentation (drafting resolutions, bills,
                                directives, etc.). Delegates will be allowed to use digital or
                                electronic dictionaries during the unmoderated caucuses. In the case
                                of requiring a term clarification or definition during the moderated
                                caucuses, delegates are expected to approach the dais for any sort
                                of assistance.{' '}
                            </p>
                        </li>
                        <li>
                            <p>
                                Individuals involved in the conference are allowed to take pictures
                                or videos outside the committee rooms (when the formal session (s)
                                is officially suspended or adjourned by the dais or during breaks).
                                However, please note non-consensual photography or videography of
                                any individual involved in the conference, during the formal session
                                or otherwise, is strictly prohibited. It is also forbidden to make
                                videos of the formal debate proceedings and put them on social media
                                channels. This rule also includes taking pictures of the
                                secretariat, host team, and organising committee during the
                                conference.{' '}
                            </p>
                        </li>
                        <li>
                            <p>
                                Responsible use of social media, HUMUN’s official social media
                                channels, and committee groups have to be maintained throughout the
                                conference. Committee groups and official social media handles
                                facilitate communication between HUMUN and all the individuals
                                involved. Please make sure you are using the committee groups for
                                conference-related communication only. HUMUN does not discourage the
                                use of various mediums of humour (such as memes) on committee
                                groups. However, delegates are expected to be responsible, mature
                                and safe about such mediums.{' '}
                            </p>
                        </li>
                    </ol>
                </li>
                <li>
                    <p>
                        <span className='lemon-font' style={{ marginBottom: '15px' }}>
                            Specific online conduct (concerning online mediums such as Zoom,
                            Facebook, Discord, Emails, etc.)
                        </span>
                    </p>
                    <ul type='a'>
                        <li>
                            <p>
                                All the individuals involved in HUMUN must use the chat option
                                carefully, responsibly, and equitably. Note that your messages are
                                visible to everyone on Zoom chat, and hence, any offensive or
                                derogatory remark might have a potential for equity violation. For
                                more on this, consult the provision on courtesy and the Equity
                                Policy of HUMUN IV. Such notions of courtesy are to be maintained
                                both in formal and informal debate sessions. While the speakers
                                deliver speeches, it is courteous not to send messages on Zoom chat
                                in that time frame unless necessary. It might distract the delegate
                                speaking and the committee staff. In the case of private
                                conversations, it is advisable to use personal means such as through
                                your WhatsApp, Messenger, etc.
                            </p>
                        </li>
                        <li>
                            <p>
                                While your video is on, make sure that your live stream does not
                                contain any offensive background containing sexual or nude imagery,
                                political message, or hurtful symbols or signs. It is advisable for
                                delegates to put up a flag of the country they represent or use the
                                official HUMUN IV background as their Zoom background. HUMUN’s
                                official Zoom background will be shared with the delegates.{' '}
                            </p>
                        </li>
                        <li>
                            <p>
                                Everyone in the Zoom meeting room must be mindful of the disruptive
                                use of technology. While the others are speaking, keep yourself mute
                                unless specified otherwise, as background noise might impact the
                                deliverance of speeches. Deliberately disrupting the debate through
                                speakers, mic, or Zoom background options violates the code of
                                conduct. Do not interrupt the person who is speaking. For immediate
                                help or queries, privately send a message to the committee staff
                                present in the Zoom room. Also, be responsible for your use of
                                emojis and reactions during the conference.{' '}
                            </p>
                        </li>
                        <li>
                            <p>
                                At HUMUN, we recognise that delegates might want to socialise after
                                the conclusion of formal sessions to work on the committee
                                proceedings or to have an enjoyable time. During the course of
                                three-day of the conference, all of the rules set by HUMUN and
                                Equity Policy have to be followed strictly- while socialising as
                                well. Please note your consumption habits (such as alcohol or
                                illicit drugs) constitute responsibility for your conduct and
                                behaviour.{' '}
                            </p>
                        </li>
                        <li>
                            <p>
                                All of the online mediums set by HUMUN Executive Council are the
                                property of HUMUN IV, and by extension, its Executive Council and
                                Habib University. Sharing the credentials or Zoom links with
                                individuals who are not part of HUMUN IV in any capacity violates
                                the code of conduct and warrants strict action. If you are found
                                sharing private credentials and links with your friends or teammates
                                under the guise of ‘observer status’ or other, that is also a
                                violation of the code of conduct. Moreover, any document that Team
                                HUMUN shares are not to be distributed outside the official
                                channels. You are not allowed to share such provisions with
                                individuals not part of HUMUN in any capacity.{' '}
                            </p>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>
                        <span className='lemon-font' style={{ marginBottom: '15px' }}>
                            Statements by the Secretariat
                        </span>
                    </p>
                    <p>
                        Secretary-General holds the highest discretion for the committee
                        proceedings, formal debate, and academics in general. The Secretary-General
                        and the specified members of the secretariat (such as the
                        Under-Secretary-Generals) reserve the right to give verbal and formally
                        written updates to the committees at HUMUN at a given point. Additionally,
                        Secretary-General and the Under-Secretary-Generals will be addressing the
                        committees in a formal setting for updates, dais and conference feedback,
                        committee evaluation, and general announcements.{' '}
                    </p>
                </li>
                <li>
                    <p>
                        <span className='lemon-font' style={{ marginBottom: '15px' }}>
                            Credentials
                        </span>
                    </p>
                    <p>
                        HUMUN has accounted for the credentials of all the delegates through the
                        registration form. Delegates have given HUMUN the right to process their
                        credentials accordingly by submitting your information through registration.
                        Such processing involves contacting individuals or institutional
                        representatives in the case of any concern, asterisking minors for applying
                        child protection concerns, applying any specific rights or privileges, etc.
                        If any delegate requires any modification for their credentials, they may
                        write to the Director-General of HUMUN through the specified channels.{' '}
                    </p>
                </li>
                <li>
                    <p>
                        <span className='lemon-font' style={{ marginBottom: '15px' }}>
                            Absences and Opt-Out Policy
                        </span>
                    </p>
                    <p>
                        If a delegate is not present during the roll-call, they will be marked
                        absent until the dais receives a note confirming said delegate’s presence.
                        In the cases where a delegate is recognised but not present in the
                        committee, their time will be automatically yielded to the Chair. The dais
                        will not halt the debate for an absentee delegate. In order to be eligible
                        for receiving awards at HUMUN, delegates are required to attend all the
                        committee sessions. If a delegate has to leave the committee session in the
                        case when there is a genuine reason (any sort of illness, family emergency,
                        academic responsibilities, etc), delegates are allowed to leave the
                        committee session. Their awards eligibility will be left at the discretion
                        of the dais.{' '}
                    </p>
                </li>
            </ol>
        </Container>
    );
};

export default EquityPolicy;
