
const Pagination = ({ currentPage, totalPages, onPageChange }) => {

    const renderPages = () => {
        let pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <li key={i}>
                    <a href="#product" onClick={(e) => {
                        e.preventDefault();
                        onPageChange(i);
                    }} className={`flex items-center justify-center px-4 h-10 leading-tight ${currentPage === i ? 'text-blue-600 bg-blue-50 dark:text-white dark:bg-[#374151]' : 'text-gray-500 bg-white'} border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>
                        {i}
                    </a>
                </li>
            );
        }
        return pages;
    };

    return (
        <nav >
            <ul className="flex items-center justify-center -space-x-px my-4 text-base">
                {currentPage > 1 && (
                    <li>
                        <a href="#product" onClick={(e) => {
                            e.preventDefault();
                            onPageChange(currentPage - 1);
                        }} className="flex items-center px-2 h-10 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span className="px-2">Previous</span>
                        </a>
                    </li>
                )}
                {renderPages()}
                {currentPage < totalPages && (
                    <li>
                        <a href="#product" onClick={(e) => {
                            e.preventDefault();
                            onPageChange(currentPage + 1);
                        }} className="flex items-center px-2 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span className="px-2">Next</span>
                            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                        </a>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Pagination;