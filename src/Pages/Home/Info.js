import React from 'react';
import { infoData } from '../../utils/data';

const Info = () => {
    return (
        <div className='grid lg:grid-cols-3 p-2 gap-8 '>
            {
                infoData && infoData.map(n => (
                    <div key={n.id} className={`card rounded-2xl flex flex-row lg:card-side drop-shadow-xl ${n.bg}`}>
                        <figure className='pl-5'><img className='w-10' src={n.img} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-white">{n.title}</h2>
                            <p className='text-white'>{n.description}</p>
                            {/*
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Listen</button>
                            </div>
                            */}
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Info;