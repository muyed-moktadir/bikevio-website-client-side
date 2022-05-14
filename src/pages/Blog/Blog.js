import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./blog.css"
const Blog = () => {
    AOS.init();
    return (
        <div className='blogs'>
            <div data-aos="fade-right" className='blog-summary'>
                <h1>Difference between javascript and nodejs</h1>
                <p align="justify">
                JavaScript is a language that runs inside the web browser  and the documents loaded by the browser and is used as a client-side development language. It provides the behavior of the pages. Like HTML it provides the semantic structure.JavaScript running any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome).

                Node JS run V8 engine and which is used by google chrome. And javascript program which will be written under this Node JS will be always run in V8 Engine.

                </p>
            </div>
            <div data-aos="fade-left"  className='blog-summary'>
                <h1>  What is the purpose of jwt and how does it work</h1>
                <p align="justify"> JSON stands for JavaScript Object Notation and is a text-based format for transmitting data across web applications. It is easy to access the stores information for developers and computers.and which is  used as a data format by any programming language and is quickly becoming the preferred syntax for APIs, surpassing XML.

                A JWT is a string which is  made up of three parts and  dot helps to separated and serialized using base64. 
                one decoded we get header and the payload,The signature.
                the payload contains the claims and displayed as a JSON string and the the signeture ensures that the token not been altered.
                </p>
            </div>
            <div data-aos="fade-right"  className='blog-summary'>
                <h1> Differences between sql and nosql databases</h1>
                <p align="justify">Databases are categorized as Relational Database Management System (RDBMS).and the SQL databases have fixed or static. on the other hand NoSQL databases have dynamic schema.SQL databases are vertically scalable.NoSQL databases are horizontally scalable.SQL databases are best suited for complex queries.NoSQL databases are not so good for complex queries because these are not as powerful as SQL queries.
                </p>
            </div>
        </div>
    );
};

export default Blog;