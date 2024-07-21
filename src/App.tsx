import { useState, useEffect } from 'react';
import Card from './components/Card/Card';

function App() {
    const [data, setData] = useState<User[]>([]);
    const [page, setPage] = useState(parseInt(window.localStorage.getItem('page') || '0'));
    const [limit, setLimit] = useState(10);
    const [total, setTotal] = useState(0);

    interface User {
        id: number;
        firstName: string;
        lastName: string;
        phone: string;
        university: string;
        image: string;
        address: {
            address: string;
            city: string;
            state: string;
        };
        birthDate: string;
    }

    useEffect(() => {
        handleGetRequest();
        window.localStorage.setItem('page', page.toString());
    }, [page]);

    async function handleGetRequest() {
        await fetch(`https://dummyjson.com/users?skip=${page * 10}&limit=${limit}`)
            .then(res => res.json())
            .then(res => {
                setData(res.users);
                setTotal(res.total);
            })
            .finally(() => {
                console.log(data);
            });
    }

    return (
        <>
            <div>
                <div className={"flex flex-col md:flex-row flex-wrap justify-center"}>
                    {data.map(user => (
                        <Card
                            key={user.id}
                            phone={user.phone}
                            homeAddress={`${user.address.address}, ${user.address.city}, ${user.address.state}`}
                            university={user.university.toUpperCase()}
                            dob={user.birthDate}
                            fullName={`${user.firstName} ${user.lastName}`}
                            image={`${user.image}`} // Replace with actual image URL if available
                        />
                    ))}
                </div>
                <div className="card w-full flex justify-center my-5">
                    <div className='flex w-64 justify-center gap-4'>
                        <button className={"bg-[#3E829A] text-white font-bold py-2 px-4 rounded;"} onClick={() => {
                            if (page === 0) return;
                            setPage(page - 1);
                        }}>
                            geri
                        </button>
                        <p className={"text-2xl px-4"}>
                            {page + 1}
                        </p>
                        <button className={"bg-[#3E829A] text-white font-bold py-2 px-4 rounded;"} onClick={() => {
                            if (page >= Math.ceil(total / limit) - 1) return;
                            setPage(page + 1);
                        }}>
                            ileri
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;