import React, { useEffect } from 'react';
import committeesData from '../data/committeesData';
import CommitteeInfo from '../components/CommitteeInfo';

const Committees = ({ setActive }) => {
    useEffect(() => {
        document.title = 'Committees';
        setActive([false, false, true, false, false]);
    }, []);
    return (
        <>
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
                    <a href='#general-assembly'> 1. General Assembly </a>
                    <a href='#economic-regional'> 2. Economic Social Council & Regional Bodies </a>
                    <a href='#specialized'> 3. Specialized Agencies </a>
                </div>

                <h3 className='committee_type' id='general-assembly'>
                    General Assembly:
                </h3>
                {committeesData.map((c) => (
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

                <h3 className='committee_type' id='economic-regional'>
                    Economic Social Council and Regional Bodies:
                </h3>
                {committeesData.map((c) => (
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
                {committeesData.map((c) => (
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
        </>
    );
};

export default Committees;
