import { useState } from 'react';
import posts from '../data/posts.json';
import { ArticlesLocal } from '../components/articles';
import SearchInput from '../components/search-input';

export default function Home() {
    const [resultPosts, setResultPosts] = useState(posts);
    const [totalPosts, setTotalPosts] = useState(0);

    const handleFilterPosts = (value) => {
        const filtered = posts.filter((data) =>
            data.title.toLocaleLowerCase().includes(value)
        );
        setResultPosts(filtered);
        setTotalPosts(filtered.length);
    };

    return (
        <>
            <section className='container mx-auto px-4 py-8 text-white space-y-10 flex flex-col items-center justify-center'>
                <div className='space-y-4'>
                    <h1 className='text-4xl font-bold capitalize text-center'>
                        dummy JSON
                    </h1>

                    <SearchInput
                        onSearchChange={handleFilterPosts}
                        lengthArray={totalPosts}
                    />
                </div>

                {/* Tanpa Destructuring */}
                {/* {posts.map((data) => (
                    <Articles
                        key={data.id}
                        title={data.title}
                        body={data.body}
                    />
                ))} */}

                {/*  Dengan Destructuring di Parameter */}
                {/* {posts.map(({ id, title, body }) => (
                    <Articles key={id} title={title} body={body} />
                ))} */}

                {/*  Destructuring dan Spread Operator */}
                {/* {posts.map(({ id, title, body }) => (
                    <Articles key={id} {...{ title, body }} />
                ))} */}

                <div className='flex flex-wrap gap-6 justify-center'>
                    {/*  Destructuring dan Spread Operator */}
                    {resultPosts.map((data, index) => (
                        <ArticlesLocal key={index} {...data} />
                    ))}
                </div>

                {/*
                     Keterbacaan: Contoh pertama mudah dibaca dan diikuti, terutama bagi mereka yang mungkin tidak terbiasa dengan destructuring.
                     Keringkasan: Contoh kedua dan ketiga lebih ringkas dan lebih "bersih", mengurangi jumlah kode yang harus ditulis.
                     Fleksibilitas: Contoh ketiga menggunakan spread operator, yang sangat berguna jika ada banyak properti yang perlu diteruskan.
                */}
            </section>
        </>
    );
}
