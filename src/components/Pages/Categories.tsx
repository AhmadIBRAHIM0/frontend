import {Category} from "../../models/Category";
import React, {useEffect, useState} from "react";
import Wrapper from "../Wrapper";
import {Link} from "react-router-dom";

const Categories = () => {

    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        const response = await fetch('http://localhost:3000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
        });
        return await response.json();
    }

    useEffect(() => {
        async function fetchData() {
            const data = await getCategories()
            setCategories(data);
        }

        fetchData().then(r => console.log(r));
    }, []);

    const handleDelete = async (id: number) => {
        await fetch('http://localhost:3000/categories/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
        })
        setCategories(categories.filter((category: Category) => category.id !== id));
    }

    return (
        <Wrapper>
            <div className="block">
                <h3 className="text-2xl font-semibold tracking-wide mt-6 mb-6">Categories</h3>
                    <Link to="/categories/create"
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6">
                        Create
                    </Link>
                <div className="flex flex-col mt-6">
                    <div className="overflow-x-auto">
                        <div className="p-1.5 w-full inline-block align-middle">
                            <div className="overflow-hidden border rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            ID
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                        >
                                            Edit
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                        >
                                            Delete
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                    {categories.length > 0 ? categories.map((category: Category) => (
                                            <tr key={category.id}>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                    {category.id}
                                                </td>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                    {category.name}
                                                </td>
                                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                    <Link
                                                        className="text-green-500 hover:text-green-700"
                                                        to={`/categories/${category.id}`}
                                                    >
                                                        Edit
                                                    </Link>
                                                </td>
                                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                    <button
                                                        className="text-red-500 hover:text-red-700"
                                                        onClick={(event) => handleDelete(category.id)}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        )) :
                                        <tr className="text-center">
                                            <td colSpan={4}>No categories</td>
                                        </tr>
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Categories