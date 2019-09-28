import React from 'react';
import Layout from './Layout';

const BlogLayout = ({ children }) => (
    <Layout>
        <div className="blogArticle">
            {children}
        </div>
    </Layout>
);

export default BlogLayout;
