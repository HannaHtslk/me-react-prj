const Booklist = ({books}) => {
    return (
    
    <ul>
        {books.map((book) => {
           return <li>{ book.name}</li>
        })
    }
    </ul>
)
};

export default Booklist;