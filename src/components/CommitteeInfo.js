import React from 'react';
import { Link } from 'react-router-dom';

const CommitteeInfo = ({ title, chair, info, img, link, guide }) => {
    console.log(title);
    return (
        <div className='committee'>
            <div className='committee_overview'>
                <h4 className='committee_title'>{title}</h4>
                <p className='committee_date'> </p>
            </div>
            <div className='committee-chair'>{/* <bold>Chair:</bold> {chair} */}</div>
            <p className='committee_info'>{info.slice(0, 450)}..</p>
            <p className='committee-links'>
                <Link className='committee_link committee_info-link' to={'/committees/' + link}>
                    Learn More
                </Link>
                <Link className='committee_link committee_info-link' to={'/guides/' + guide}>
                    Download Guide
                </Link>
            </p>
            <img className='committee_img' src={img} alt={title}></img>
        </div>
    );
};

export default CommitteeInfo;
