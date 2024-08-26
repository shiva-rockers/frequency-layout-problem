import React, { useEffect, useState } from 'react';
import { getLayout } from '../service/layout';

const FREQUENCY = 10000;

const Home = () => {
    const [layout, setLayout] = useState(null);

    const fetchLayout = async () => {
        try {
            const response = await getLayout();
            setLayout({ sequence: response.sequence, layoutTitle: response.layoutTitle });
        } catch (error) {
            console.log('something went wrong.', error);
        }
    };

    const intFrequency = async () => {
        setInterval(() => {
            fetchLayout();
        }, FREQUENCY);
    };

    useEffect(() => {
        intFrequency();
    }, []);

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            {layout ? (
                <span>
                    {' '}
                    <b>Rendering :</b> {layout.layoutTitle}{' '}
                </span>
            ) : (
                <b> Loading... </b>
            )}
        </div>
    );
};

export default Home;
