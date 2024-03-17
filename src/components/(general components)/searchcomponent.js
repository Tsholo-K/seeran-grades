'use client';
 
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';


const SearchComponent = () => {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
 
    const handleSearch = useDebouncedCallback( (event) => {
        const params = new URLSearchParams(searchParams);
        if (event.target.value) {
            params.set('query', event.target.value);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 1000 )

    return (
        <div className='mt-8 mb-6'>
            <p className="pl-2 text-sm text-gray-400 pb-1">search student</p>
            <input
                onChange={handleSearch}
                type="text"
                className="w-full bg-white rounded-xl h-10 px-4"
                defaultValue={searchParams.get('query')?.toString()}
            />
            <p className="text-center text-sm text-gray-400 pt-1">you can search by name, surname or account id</p>
        </div>
    )
};

export default SearchComponent;