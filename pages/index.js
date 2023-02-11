import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import client from "../sanity";
import { urlFor } from "../sanity";
import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footerfinal1 from "../components/Footerfinal1";
import Img from "../components/Img";
import Button from "../components/Button";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // console.log("Hello world");

  const [posts, getPosts] = useState([]);
  useEffect(() => {
    const query = `*[_type == "post"]| order(_createdAt desc){
      _id,
      title,
      author -> {
        name,
        image
      },
        description,
        slug,
        mainImage
    }`;
    //  console.log(posts)
    //  console.log("he")
     client.fetch(query).then((data) => {
      getPosts(data);
    });
  }, []);

  const button=useCallback(() => {

  },[]);

  // const button2=useMemo()
  
  return (
    <div className="mainbdy">
      <Head>
        <title>Mailer-Daemon</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Img/> 

      <Button/>
      <div className="lsttrend">
        <div className="latestpst">
          <h1 className="indexh1">Latest Posts</h1>

          {posts?.map((post) => {
            return (
              <Link key={post._id} href={`/post/${post.slug.current}`}>
                <div className="" style={{ display: "inline-block" }}>
                  <img
                    className="main image"
                    style={{
                      height: 180,
                      width: 190,
                      marginLeft: 40,
                      marginTop: 30,
                    }}
                    src={urlFor(post.mainImage).url()}
                    alt=""
                  />
                  <div>
                    <div>
                      <p
                        className="post title"
                        style={{ fontSize: 18, marginLeft: 38 }}
                      >
                        {post.title}
                      </p>
                      <p
                        className="author name"
                        style={{ fontSize: 14, marginLeft: 39 }}
                      >
                        {" "}
                        by {post.author.name}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="trending">
          <h1 className="trendh1">Popular Reads</h1>

          {posts?.map((post) => {
            return (
              <Link key={post._id} href={`/post/${post.slug.current}`}>
                <div className="" style={{ display:"block" }}>
                  <img
                    className="main image"
                    style={{
                      height: 105,
                      width: 100,
                      marginLeft: -60,
                      // marginBottom: 35,
                      marginTop:30,
                      paddingBottom:30
                    
                    }}
                    src={urlFor(post.mainImage).url()}
                    alt=""
                  />
                  <div>
                    <div>
                      <p
                        className="post title"
                        style={{ fontSize: 18, marginLeft: 80  , marginTop: -67}}
                      >
                        {post.title}
                      </p>
                      <p
                        className="author name"
                        style={{ fontSize: 14, marginLeft: 80, marginTop:0}}
                      >
                        {" "}
                        by {post.author.name}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      {/* <div className="bestpost">
        <h1 className="besth1">Best Post</h1>
      </div> */}
      <div className="yt">
        <h1 className="glimpseh1">Glimpse Of Mailer Daemon</h1>
        <iframe
          className="vdo"
          width="373"
          height="207"
          src="https://www.youtube.com/embed/F8SXYoZdDlE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <iframe
          className="vdo"
          width="373"
          height="207"
          src="https://www.youtube.com/embed/9Unn9PrJipE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <iframe
          className="vdo"
          width="373"
          height="207"
          src="https://www.youtube.com/embed/rDwTHDuo9to"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <iframe
          className="vdo"
          width="373"
          height="207"
          src="https://www.youtube.com/embed/Q5zUix83988"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      {/* <Footerfinal1 /> */}
    </div>
  );
}
