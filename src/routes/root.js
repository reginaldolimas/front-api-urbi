import { Link, Outlet, useLoaderData, Form } from "react-router-dom";
import getContacts from "./contact";
import createContact from "./contact";
import { useEffect } from "react";

export async function loader() {
    const contacts = await getContacts();
    return { contacts };
}

export async function action() {
    const contact = await createContact();
    return { contact };
}

export default function Root() {
    const { contacts } = useLoaderData();
    const dados = contacts.props.children;

    useEffect(() => {
        // eslint-disable-next-line no-unused-expressions
        console.log('contatos', dados[1]),
            []
    })


    return (
        <>
            <div id="sidebar">
                <h1>React Router Contacts</h1>
                <div>
                    <Form method="post">
                        <button type="submit">New</button>
                    </Form>

                </div>
                <nav>
                    {dados.length ? (
                        <ul>
                            {dados.map((contact) => (
                                <li key={contact.id}>
                                    <Link to={`contacts/${contact.id}`}>
                                        {contact.first || contact.last ? (
                                            <>
                                                {contact.first} {contact.last}
                                            </>
                                        ) : (
                                            <i>No Name</i>
                                        )}{" "}
                                        {contact.favorite && <span>★</span>}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>
                            <i>No contacts</i>
                        </p>
                    )}>
                </nav>
            </div>
            <div id="detail"><Outlet /></div>
        </>
    );
}