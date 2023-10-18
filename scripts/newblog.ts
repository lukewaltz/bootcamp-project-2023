
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
                <h2>${blog.title}</h2>
                <h3>${blog.date}</h3>
                <p>${blog.description}</p>
            `;

            //append the new element to the container div
            containerDiv.appendChild(blogElement);
        });
    } else {
        console.error("container div with class 'blog-entry' not found.");
    }
}

