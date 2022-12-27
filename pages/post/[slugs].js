import { urlFor } from '../../sanity'
import client from '../../sanity'
import { Router, useRouter } from 'next/router'
// import PortableText from 'react-portable-text'
//import { useForm, SubmitHandler } from 'react-hook-form'
import { useState, useEffect } from 'react'
import Head from 'next/head'

export const test= async ()=>{
  console.log('hello');
  
}


function PostPage() {
  
  const router = useRouter();
  const {slugs}=router.query;
  //console.log(slugs);
  const currentSlug = slugs;
  //console.log(currentSlug);
  
  const [postSelect, setPost]= useState(false);

  useEffect(()=>{
    const query=`*[_type=="post" && slug.current=="${currentSlug}"]| order(_createdAt desc){
      _id,
      _createdAt,
      title,
      author->{
        name,
        image
      },
      description,
      mainImage,
      slug,
      body
    }`
    client.fetch(query).then(data=>{
      setPost(data);
    }).catch(err=>{
      console.log("couldnt get data");
    })
  },[setPost]);
  test();
  console.log(postSelect);
  // const post = postSelect[0];
  // post?console.log(post):console.log("stop");


  return (
    <>
      <p>lets see if it works</p>
    </>
  )
}

export default PostPage





//<main  className='relative overflow-clip'>
    //   <div className='hidden md:inline-block absolute w-72 h-72 bg-purple-500 rounded-full top-[130vh] -left-32 opacity-80 blur-sm'></div>
    //   <div className='hidden md:inline-block absolute w-72 h-72 bg-gray-500 rounded-full top-[260vh] -right-40 opacity-80 blur-sm'></div>
    //   <div className='hidden md:inline-block absolute w-72 h-72 bg-orange-500 rounded-full top-[230vh] -left-28 mix-blend-multiply opacity-80 blur-sm'></div>
    //   <div className='hidden md:inline-block absolute w-72 h-72 bg-pink-300 rounded-full top-[160vh] -right-20 mix-blend-multiply opacity-80 blur-sm'></div>
    //   {/* <div className='hidden md:inline-block absolute w-72 h-72 bg-orange-500 rounded-full top-[50vh] -left-28 mix-blend-multiply opacity-80 blur-sm'></div> */}
    //   <Head>
    //     <title>{post.title}</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>
    //   <img
    //     className="h-screen w-full object-cover"
    //     src={urlFor(post.mainImage).url()}
    //     alt=""
    //   />
    //   <article className="mx-auto max-w-3xl p-5">
    //     <h1 className="mt-10 mb-3 text-3xl">{post.title}</h1>
    //     <h2 className="text-xl font-light text-gray-500">{post.description}</h2>
    //     <div className="flex items-center space-x-2">
    //       <img
    //         className="h-10 w-10 rounded-full"
    //         src={urlFor(post.author.image).url()}
    //         alt=""
    //       />
    //       <p className="text-sm font-extralight">
    //         Blog post by{' '}
    //         <span className="text-green-600">{post.author.name}</span> -
    //         Published at {new Date(post._createdAt).toLocaleString()}
    //       </p>
    //     </div>
    //     <div className="mt-10">
    //       <PortableText
    //         className=""
    //         dataset={"production"}
    //         projectId={"8cdj48ib"}
    //         content={post.body}
    //         serializers={{
    //           h1: (props) => (
    //             <h1 className="my-5 text-2xl font-bold" {...props} />
    //           ),
    //           h2: (props) => (
    //             <h1 className="my-5 text-xl font-bold" {...props} />
    //           ),
    //           li: ({ children }) => (
    //             <li className="ml-4 list-disc">{children}</li>
    //           ),
    //           link: ({ href, children }) => (
    //             <a href={href} className="text-blue-500 hover:underline">
    //               {children}
    //             </a>
    //           ),
    //           // image: (props: any) => (
    //           //   <img {...props} className="w-full flex-1 items-center" />
    //           // )
    //         }}
    //       />
    //     </div>
    //   </article>
    //   <hr className="my-5 mx-auto max-w-lg border border-yellow-500" />

      
    // </main>