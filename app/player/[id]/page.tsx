type Props = {
    params: Promise<{ id: string }>   
}

async function getBook(id: string) {
    try {
        const res = await fetch(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`);
        if (!res.ok) return null;
        return await res.json();
    } catch {
        return null;
    }
}

export default async function BookPage({ params }: Props) {
    const { id } = await params;
    const book = await getBook(id);
    

    if (!book) {
        return <main><h1>Book not found</h1></main>;
    } else {
        console.log(book)
    }


    return (
        <div>
            hello this is the ID {id}
        </div>
    );
}