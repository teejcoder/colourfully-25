import React from 'react';
import ReactMarkdown from 'react-markdown';
import Tos from '@/static/tos';

const TosPage: React.FC = () => {
    return (
        <section className='container prose mx-auto text-white p-6'>
            <ReactMarkdown>{Tos}</ReactMarkdown>
        </section>
    );
};

export default TosPage;