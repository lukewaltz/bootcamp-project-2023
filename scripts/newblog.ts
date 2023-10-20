
//define blog type
export type Blog = {
    title: string;
    date: string;
    description: string;
    slug: string;
}

//initialize list of blogs
const blogs: Blog[] = [
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

export function renderBlogs(blogs: Blog[]){
    //find container div using DOM manipulation
    const containerDiv = document.querySelector('.blog');

    //check if div exists
    if(containerDiv) {
        //iteration over list of blogs
        blogs.forEach(blog => {
            //create a div for each blerg
            const blogElement = document.createElement('div');

            //set content of new element
            blogElement.innerHTML = `
            <a href="${blog.slug}.html">
                <div>
                    <p><br /></p>
                    <h2>${blog.title}</h2>
                    <h3>${blog.date}</h3>
                    <p>${blog.description}</p>
                </div>
            </a>
            `;

            //append the new element to the container div
            containerDiv.appendChild(blogElement);
        });
    } else {
        console.error("container div with class 'blog-entry' not found.");
    }
}

