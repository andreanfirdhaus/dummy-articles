import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ArticlesLocal(props) {
    return (
        <>
            <article className='max-w-sm bg-zinc-800 rounded-xl p-6 flex flex-col justify-between items-start'>
                <div className='space-y-2 sm:space-y-3.5 mb-5 sm:mb-6'>
                    <div className='space-y-1.5'>
                        <p className='line-clamp-3 text-sm text-zinc-300'>
                            #{props.tag}
                        </p>
                        <h1 className='text-xl font-semibold line-clamp-2'>
                            {props.title}
                        </h1>
                    </div>
                    <p className='line-clamp-3 text-base text-zinc-300'>
                        {props.body}
                    </p>
                </div>
                <Link
                    to={`/`}
                    className='capitalize text-blue-400 hover:text-blue-500 cursor-pointer'
                >
                    read more
                </Link>
            </article>
        </>
    );
}

function ArticlesAPI(props) {
    return (
        <>
            <article className='max-w-sm bg-zinc-800 rounded-xl p-6 flex flex-col justify-between items-start'>
                <div className='space-y-2 sm:space-y-3.5 mb-5 sm:mb-6'>
                    <h1 className='text-xl font-semibold line-clamp-2'>
                        {props.title}
                    </h1>
                    <p className='line-clamp-2 text-base text-zinc-300'>
                        {props.abstract}
                    </p>
                </div>
                <Link
                    to={`/articles/${props.id}`}
                    className='capitalize text-blue-400 hover:text-blue-500 cursor-pointer'
                >
                    read more
                </Link>
            </article>
        </>
    );
}

export { ArticlesLocal, ArticlesAPI };

ArticlesLocal.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    tag: PropTypes.string,
};
ArticlesAPI.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    abstract: PropTypes.string,
    byline: PropTypes.string,
    published_date: PropTypes.string,
};
