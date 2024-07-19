import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Avatar from '../../assets/avatar.png';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

export default function SinglePost() {
    const posts = useLoaderData();
    const params = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const foundPost = posts.results.find(
            (item) => item.id == parseInt(params.id)
        );
        setPost(foundPost);
    }, [params.id, posts]);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <section className='container mx-auto px-4 py-8 text-white space-y-6 flex flex-col items-center justify-center'>
            <div className='max-w-4xl p-4 sm:p-8 md:p-10 bg-zinc-800 rounded-2xl space-y-4 sm:space-y-6'>
                <div className='space-y-2.5'>
                    <div className='flex gap-2 items-center'>
                        <img
                            src={Avatar}
                            alt='avatar'
                            className='h-8'
                            draggable={false}
                        />
                        <p className='text-base text-zinc-300'>
                            {post?.byline}
                        </p>
                    </div>
                    <p className='text-base text-zinc-300'>
                        Published {formatDate(post?.published_date)}
                    </p>
                </div>
                <h1 className='text-xl sm:text-3xl font-bold capitalize'>
                    {post?.title}
                </h1>
                <p className='text-base sm:text-lg text-zinc-300'>
                    {post?.abstract}
                </p>
                {post?.media.map((data, index) => (
                    <div key={index} className='flex flex-col'>
                        <img
                            src={data['media-metadata'][2].url}
                            alt=''
                            className='rounded-xl'
                            draggable={false}
                        />
                        <p className='text-center text-sm py-2 mb-6 text-zinc-300'>
                            {data.caption}
                        </p>
                    </div>
                ))}
                <Link to={post?.url}>
                    <div className='bg-blue-600 text-white text-center font-semibold py-2.5 w-full rounded-full'>
                        Detailed News
                    </div>
                </Link>
            </div>
        </section>
    );
}
