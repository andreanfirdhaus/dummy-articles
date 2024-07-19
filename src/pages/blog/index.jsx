import NyTimes from '../../assets/nytimes.png';
import { useLoaderData } from 'react-router-dom';
import { ArticlesAPI } from '../../components/articles';

export default function Blog() {
    const posts = useLoaderData();

    return (
        <section className='container mx-auto px-4 py-8 text-white space-y-10 flex flex-col items-center justify-center'>
            <div className='space-y-4'>
                <div className='flex gap-2 justify-center items-center'>
                    <img src={NyTimes} alt='' className='max-h-14' />
                    <h1 className='text-4xl font-bold capitalize'>
                        NyTimes APIs
                    </h1>
                </div>
                <p className='capitalize text-center max-w-sm'>
                    {posts.num_results} records found in a simple retrieval from
                    the new york times API
                </p>
            </div>

            <div className='flex flex-wrap gap-6 justify-center'>
                {posts.results?.map((data, index) => (
                    <ArticlesAPI key={index} {...data} />
                ))}
            </div>
        </section>
    );
}
