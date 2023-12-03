import Link from "next/link";

async function getTickets() {
    await new Promise(resolve => setTimeout(resolve, 3000))

    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 0
        }
    });
    return res.json();
}

async function TicketList() {
    //fetching the data
    const tickets = await getTickets();
    return (
        <>
            {tickets.map((ticket) => (
                <Link href={`/tickets/${ticket.id}`}>
                    <div key={ticket.id} className="card my-5" >
                        <h3>{ticket.title}</h3>
                        <p>{ticket.body.slice(0, 200)}...</p>
                        <div className={`pill ${ticket.priority}`}>
                            {ticket.priority} priority
                        </div>
                    </div>
                </Link>
            ))}
            {tickets.length === 0 && (
                <p className="text-center">There are no open tickets.</p>
            )}
        </>
    );
}

export default TicketList;