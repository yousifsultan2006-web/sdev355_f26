import BookCard from "../components/BookCard";
import Panel from "../components/Panel";
import BookShelf from "../components/BookShelf";
import { useFetch } from "../hooks/hooks";

export default function Want() {
    const {
        data: books,
        setData: setBooks,
        loading,
        error 
    } = useFetch("http://localhost:4000/api/books",[], []);

    function cards(title, books) {
        return (
            <Panel title = {title}>
                {books.length > 0 && books.map(book=> (
                    <BookCard key={book.id} book={book} />
                    ))}
            </Panel>
        );
    }

    const finishedReading = books.filter(el => el.status === "finished");

    return (
        <div>
            <BookShelf books={books} error ={error} loading={loading}>
                {cards("Finished reading", finishedReading)}

            </BookShelf>
        </div>
    )
}


