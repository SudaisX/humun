import React, { useEffect } from 'react';
import committeesData from '../../data/committeesData';
import CommitteeInfo from '../../components/CommitteeInfo';
import { Container } from 'react-bootstrap';

const Committees = ({ setActive }) => {
    useEffect(() => {
        document.title = 'Committees | HUMUN';
        setActive([false, false, false, true, false]);
    }, [setActive]);
    return (
        <Container>
            <h2 className='page-title'>
                <span className='wavy'>Committees</span>
            </h2>
            <div className='committees'>
                <p className='committee-info'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quisquam temporibus
                    ullam quaerat fuga ipsam iusto recusandae nulla corporis maiores neque eius
                    aliquid itaque voluptas, hic nihil aut eum cumque. In repellat voluptatum animi
                    quia esse, autem, numquam minus omnis eaque soluta necessitatibus rerum vero,
                    facilis assumenda deleniti. Placeat at odio suscipit recusandae et tempora earum
                    quibusdam quod veniam voluptas!
                </p>
                <div className='committee_types'>
                    <a href='#general-assembly'> 1. General Assemblies </a>
                    <a href='#specialized'> 2. Specialized Agencies </a>
                    <a href='#crisis'> 3. Crisis Committees </a>
                </div>

                <h3 className='committee_type' id='general-assembly'>
                    General Assemblies:
                </h3>
                {committeesData.slice(0, 2).map((c) => (
                    <CommitteeInfo
                        key={c.id}
                        title={c.title}
                        chair={c.chair}
                        info={c.info}
                        img={c.img}
                        link={c.link}
                        guide={c.guide}
                    />
                ))}

                <h3 className='committee_type' id='specialized'>
                    Specialized Agencies:
                </h3>
                {committeesData.slice(2, 5).map((c) => (
                    <CommitteeInfo
                        key={c.id}
                        title={c.title}
                        chair={c.chair}
                        info={c.info}
                        img={c.img}
                        link={c.link}
                        guide={c.guide}
                    />
                ))}

                <h3 className='committee_type' id='crisis'>
                    Crisis Committees:
                </h3>
                {committeesData.slice(5).map((c) => (
                    <CommitteeInfo
                        key={c.id}
                        title={c.title}
                        chair={c.chair}
                        info={c.info}
                        img={c.img}
                        link={c.link}
                        guide={c.guide}
                    />
                ))}
            </div>
        </Container>
    );
};

export default Committees;
