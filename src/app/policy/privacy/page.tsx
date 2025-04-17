import React from 'react';
import ReactMarkdown from 'react-markdown';
import Privacy from '@/static/privacy';

const PrivacyPolicy: React.FC = () => {
    return (
        <section className='container prose mx-auto text-white p-6'>
            <ReactMarkdown>{Privacy}</ReactMarkdown>
        </section>
    );
};

export default PrivacyPolicy;