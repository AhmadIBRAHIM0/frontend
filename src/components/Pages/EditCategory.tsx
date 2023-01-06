import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Wrapper from "../Shared/Wrapper";

const EditCategory = () => {
    const {id} = useParams();
    const [name, setName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        (
            async () => {
                const response = await fetch(`http://localhost:3000/categories/${id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                })
                const data = await response.json();
                setName(data.name);
            }
        )()

    }, []);

    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3000/categories/' + id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                name: name,
            })
        });
        const data = await response.json();
        if (data?.id) {
            navigate('/categories');
        }
    }

    return (
        <Wrapper>
            <div className="block">
                <h3 className="text-2xl font-semibold tracking-wide mt-6 mb-6">Update Category - {name}</h3>
                <div className="w-full max-w-xs mt-32">
                    <form className="bg-gray-50 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submit}>
                        <div className="mb-2">
                            <label
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                required
                                defaultValue={name}
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div className="mt-6">
                            <button
                                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Wrapper>
    );
};

export default EditCategory