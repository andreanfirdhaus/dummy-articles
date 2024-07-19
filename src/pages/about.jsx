import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { GoRepo, GoStar, GoRepoForked, GoDotFill } from 'react-icons/go';
import { Link } from 'react-router-dom';

export default function About() {
    const github = useLoaderData();
    const [repository, setRepository] = useState(null);

    useEffect(() => {
        if (Array.isArray(github)) {
            const data = github.find((data) => data.name === 'dummy-articles');
            setRepository(data);
        } else {
            console.error('Expected an array but received:', github);
        }
    }, [github]);

    return (
        <>
            <div className='container mx-auto px-4 py-8 text-white space-y-10 flex flex-col items-center justify-center'>
                {repository ? (
                    <section className='flex flex-col justify-between gap-16 bg-zinc-800 rounded-xl p-4'>
                        <div className='space-y-2'>
                            <div className='flex flex-wrap gap-2 items-center'>
                                <GoRepo size={18} />
                                <Link
                                    to={repository.html_url}
                                    rel='noopener noreferrer'
                                >
                                    <p className='text-base font-semibold hover:underline'>
                                        {repository.name}
                                    </p>
                                </Link>
                                <p className='text-xs capitalize p-1 px-3 rounded-full border border-zinc-300'>
                                    {repository.visibility}
                                </p>
                            </div>
                            <p className='text-sm text-zinc-300 max-w-sm'>
                                {repository.description}
                            </p>
                        </div>

                        <div className='flex gap-4 flex-wrap [&_div]:space-x-1.5 [&_div]:items-center'>
                            <div className='flex'>
                                <GoDotFill
                                    size={20}
                                    className='text-yellow-400'
                                />
                                <p className='text-sm'>{repository.language}</p>
                            </div>
                            <div className='flex'>
                                <GoStar size={16} />
                                <p className='text-sm'>
                                    {repository.stargazers_count}
                                </p>
                            </div>
                            <div className='flex'>
                                <GoRepoForked size={16} />
                                <p className='text-sm'>
                                    {repository.forks_count}
                                </p>
                            </div>
                        </div>
                    </section>
                ) : (
                    <p>Repository not found.</p>
                )}

                <section>
                    <ul className='list-disc list-inside sm:list-outside max-w-sm'>
                        <li>useState()</li>
                        <li>props, parent and child components</li>
                        <li>using base components to define UI</li>
                        <li>
                            directory structures such as, assets, data, pages,
                            layouts, and routes
                        </li>
                        <li>
                            react-router-dom v.6.24
                            <ul className='list-disc list-inside sm:list-outside ml-4'>
                                <li>
                                    implementation router: App.jsx,
                                    src/routes/index.jsx
                                </li>
                                <li>loader</li>
                            </ul>
                        </li>

                        <li>simple fetch API nytimes</li>
                        <li>validation using prop-types</li>
                    </ul>
                </section>
            </div>
        </>
    );
}
