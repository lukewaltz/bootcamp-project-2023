"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// exports.renderBlogs = void 0;
//initialize list of blogs
var blogs = [
    {
        title: 'Weekend Visit',
        date: '10/1/2023',
        description: 'This weekend my dad flew out from Denver to come visit me for the weekend...',
        slug: './blog_pages/blog1',
    },
    {
        title: 'Croatia',
        date: '10/18/2023',
        description: 'This summer I went to Croatia with my mom and sister for eight days...',
        slug: './blog_pages/blog2'
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
            blogElement.innerHTML = "\n            <a href=\"".concat(blog.slug, ".html\">\n                <div>\n                    <p><br /></p>\n                    <h2>").concat(blog.title, "</h2>\n                    <h3>").concat(blog.date, "</h3>\n                    <p>").concat(blog.description, "</p>\n                </div>\n            </a>\n            ");
            //append the new element to the container div
            containerDiv.appendChild(blogElement);
        });
    }
    else {
        console.error("container div with class 'blog-entry' not found.");
    }
}
renderBlogs(blogs);
