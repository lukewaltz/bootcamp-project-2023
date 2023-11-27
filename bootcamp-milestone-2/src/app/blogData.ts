import connectDB from "@/helpers/db"
import Blog from "@/database/blogSchema"

async function getBlogs(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await Blog.find({}).sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return blogs
	} catch (err) {
    console.error("error getting data from DB ", err);
	    return null
	}
}


//define blog type
export interface Blog{
    name: string;
    date: string;
    // image: string;
    description: string;
    text: string;
    slug: string;
}

//initialize list of blogs
const blogs: Blog[] = 
[
    {
        name: 'Weekend Visit',
        date: '10/1/2023',
        // image: '/morro_golf.jpg',
        description: 'This weekend my dad flew out from Denver to come visit me for the weekend...',
        text: "This weekend my dad flew out from Denver to come visit me for the weekend. Though it was only for three days we made the most of it. On saturday we went to High Street Deli for lunch, before going to a tailgate at my fraternity's main house. After a disappointing CalPoly football game, we managed to get a table at Flour House and had a delicious pizza dinner. On sunday morning, I picked my dad up and we made our way to Pismo Beach for a surf day. My dad brought his 20 year old wetsuit from his days in the Navy and it was pretty amusing. The waves were perfect for two Coloradoans, with gentle rolling breaks that allowed people of our skill level to attempt the larger swells. After surfing we refueled with burritos from Taqueria San Miguel, then booked a 2:55 tee time at Morro Bay Golf Course. It was an action packed weekend and I look forward to the next visit from my dad!",
        slug: 'weekend-visit',
    },
    {
        name: 'Croatia',
        date: '10/18/2023',
        // image: '/dubrovnik.jpg',
        description: 'This summer I went to Croatia with my mom and sister for eight days...',
        text: "This summer I went to Croatia with my mom and sister for eight days! We started in London where we helped move my sister, Abby, into her new flat for her first year of grad school at King's College! We then took a flight to Split, and proceeded to stay two nights there. A food tour on the second night was definitely the highlight, as we went with a fun group and got to learn about the history of the city while getting to eat every half hour or so! After that we traveled to the island of Hvar for a three night stay. In our time there, we went on a boat tour to the various surrounding islands where we did some snorkeling and cliff jumping. We also did a bike tour through the countryside of Hvar which was another highlight of the trip! We spent our last night in Dubrovnik before I hopped on a flight back to California alone. My sister is still in London at school, and my mom plans on traveling Europe, Asia, and Africa for the next year or so.",
        slug: 'croatia'
    }
];

export default blogs;