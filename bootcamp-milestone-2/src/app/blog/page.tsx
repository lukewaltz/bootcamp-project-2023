import React from 'react';
import style from './blogPost.module.css'; // Import the CSS module

function BlogPost() {
  return (
    <header className={style.blogPost} >

    <main>
      <h1 className="page-title">Weekend Visit</h1>
      <div className="blog-entry">
        <div className="blog-image-set">
          <img className="blog-image" src="../wetsuit.jpg" alt="wetsuit" />
          <img className="blog-image" src="../surf_duo.jpg" alt="surf" />
          <img className="blog-image" src="../morro_golf.jpg" alt="golf" />
        </div>
        <h3 className="blog-head">Weekend Visit - October 1, 2023</h3>
        <p className="blog-caption">
          This weekend my dad flew out from Denver to come visit me for the
          weekend. Though it was only for three days we made the most of it. On
          Saturday we went to High Street Deli for lunch, before going to a
          tailgate at my fraternity's main house. After a disappointing CalPoly
          football game, we managed to get a table at Flour House and had a
          delicious pizza dinner. On Sunday morning, I picked my dad up and we
          made our way to Pismo Beach for a surf day. My dad brought his 20-year-old
          wetsuit from his days in the Navy, and it was pretty amusing. The waves were
          perfect for two Coloradans, with gentle rolling breaks that allowed people
          of our skill level to attempt the larger swells. After surfing, we refueled
          with burritos from Taqueria San Miguel, then booked a 2:55 tee time at Morro
          Bay Golf Course. It was an action-packed weekend, and I look forward to the
          next visit from my dad!
        </p>
      </div>
      <div className="space">
        <p><br /></p>
      </div>

      <h1 className="page-title">Croatia</h1>
      <div className="blog-entry">
        <div className="blog-image-set">
          <img className="blog-image" src="../dubrovnik2.jpg" alt="wetsuit" />
          <img className="blog-image" src="../split2.jpg" alt="surf" />
          <img className="blog-image" src="../dubrovnik.jpg" alt="golf" />
        </div>
        <h3 className="blog-head">Croatia - Summer 2023</h3>
        <p className="blog-caption">
          This summer I went to Croatia with my mom and sister for eight days.
          We started in London where we helped move my sister, Abby, into her
          new flat for her first year of grad school at King's College! We then
          took a flight to Split, and proceeded to stay two nights there. A food
          tour on the second night was definitely the highlight, as we went with
          a fun group and got to learn about the history of the city while
          getting to eat every half hour or so! After that we traveled to the
          island of Hvar for a three night stay. In our time there, we went on a
          boat tour to the various surrounding islands where we did some
          snorkeling and cliff jumping. We also did a bike tour through the
          countryside of Hvar which was another highlight of the trip! We spent
          our last night in Dubrovnik before I hopped on a flight back to
          California alone. My sister is still in London at school, and my mom
          plans on traveling Europe, Asia, and Africa for the next year or so.
        </p>
      </div>
      <div className="space">
        <p><br /></p>
      </div>
    </main>
    </header>
  );
}

export default BlogPost;
