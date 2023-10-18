"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderBlogs = void 0;
//initialize list of blogs
var blogs = [
    {
        title: 'Lukes Blog 1',
        date: '10/18/2023',
        description: 'Description',
        slug: 'blog-entry1',
    },
    {
        title: 'Lukes Blog 2',
        date: '10/18/2023',
        description: 'Description',
        slug: 'blog-entry2'
    }
];
function renderBlogs(blogs) {
    //find container div using DOM manipulation
    var containerDiv = document.querySelector('.blog');
    //check if div exists
    if (containerDiv) {
        //iteration over list of blogs
        blogs.forEach(function (blog) {
            //create a div for each blerg
            var blogElement = document.createElement('div');
            //set content of new element
            blogElement.innerHTML = "\n                <h2>".concat(blog.title, "</h2>\n                <h3>").concat(blog.date, "</h3>\n                <p>").concat(blog.description, "</p>\n            ");
            //append the new element to the container div
            containerDiv.appendChild(blogElement);
        });
    }
    else {
        console.error("container div with class 'blog-entry' not found.");
    }
}
exports.renderBlogs = renderBlogs;
