import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({title, description, keywords}) {
    return (
        <Helmet>
            { /* Standard metadata tags */ }
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
            { /* End standard metadata tags */ }
            { /* Facebook tags */ }
            <meta property="og:type" content='website' />
            <meta property="og:url" content="https://leadfutresource.com/" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta name='og:keywords' content={keywords} />
            <meta property="og:image" content="https://leadfutresource.com/images/logo.png" />
            { /* End Facebook tags */ }
            { /* Twitter tags */ }
            <meta name="twitter:card" content={description} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content="https://leadfutresource.com/images/logo.png"></meta>
            { /* End Twitter tags */ }
        </Helmet>
    )
}