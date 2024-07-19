import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaMagnifyingGlass } from 'react-icons/fa6';

export default function SearchInput(props) {
    const [search, setSearch] = useState('');

    const handleSearch = () => {
        props.onSearchChange(search);
    };

    const searchKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <>
            <div className='relative my-2'>
                <input
                    type='search'
                    className='shadow rounded-full border-0 p-3 pl-10 text-black w-96 focus:outline-none focus:ring focus:ring-blue-500'
                    placeholder='Search by title...'
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={searchKeyDown}
                />
                <button
                    className='absolute top-1/2 transform -translate-y-1/2 left-4 text-zinc-950'
                    type='submit'
                    onClick={handleSearch}
                >
                    <FaMagnifyingGlass size={18} />
                </button>
            </div>
            <p className='capitalize text-center'>
                {props.lengthArray} data were found with the keywords:
                <span className='normal-case'> {search}</span>
            </p>
        </>
    );
}

SearchInput.propTypes = {
    onSearchChange: PropTypes.func,
    lengthArray: PropTypes.number,
};
