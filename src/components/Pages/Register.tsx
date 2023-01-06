import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [gender, setGender] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();

    const [allergies, setAllergies] = useState([
        {
            allergy: '',
        }
    ]);

    const addAllergyRow = () => {
        setAllergies([...allergies, {allergy: ''}])
    }

    const removeAllergyRow = (index: number) => {
        const values = [...allergies];
        values.splice(index, 1);
        setAllergies(values);
    }

    const patient = {
        email: email,
        password: password,
        first_name: firstName,
        last_name: lastName,
        blood_group: bloodGroup,
        birthdate: birthDate,
        gender: gender,
        phone: phone,
        address: address,
        allergies: ['']
    }

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        patient['allergies'] = allergies.map((allergy) => allergy.allergy);
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(patient)
        })
        const data = await response;

        if (data.status === 201) {
            navigate('/login');
        }
    }
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden mt-6 mb-6">
            <div
                className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-purple-600 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
                    Register
                </h1>
                <form className="mt-6" onSubmit={submitHandler}>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            >
                                First Name
                            </label>
                            <input
                                name="first_name"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                type="text"
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            >
                                Last Name
                            </label>
                            <input
                                name="last_name"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                type="text"
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            name="email"
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            name="password"
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            >
                                Blood Group
                            </label>
                            <div className="relative">
                                <select
                                    name="blood_group"
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    onChange={(e) => setBloodGroup(e.target.value)}
                                >
                                    <option>A+</option>
                                    <option>A-</option>
                                    <option>B+</option>
                                    <option>B-</option>
                                    <option>O+</option>
                                    <option>O-</option>
                                    <option>AB+</option>
                                    <option>AB-</option>
                                </select>
                                <div
                                    className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 20 20">
                                        <path
                                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            >
                                Gender
                            </label>
                            <div className="relative">
                                <select
                                    name="gender"
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    onChange={(e) => setGender(e.target.value)}
                                >
                                    <option value={'Male'}>Male</option>
                                    <option value={'Female'}>Female</option>
                                </select>
                                <div
                                    className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 20 20">
                                        <path
                                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Birth Date
                        </label>
                        <input
                            name="birthdate"
                            type="date"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            max={new Date().toISOString().split('T')[0]}
                            onChange={(e) => setBirthDate(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Phone Number
                        </label>
                        <input
                            name="phone"
                            required
                            type="number"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Address
                        </label>
                        <textarea
                            name="address"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            rows={3}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-center">
                        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Allergies</h5>
                            {allergies.map((allergy, index) => (
                                <div key={index} className="flex">
                                    <input
                                        name="allergy"
                                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 mr-3"
                                        type="text"
                                        onChange={(e: React.FormEvent) => {
                                            const values = [...allergies];
                                            values[index].allergy = (e.target as HTMLInputElement).value;
                                            setAllergies(values);
                                        }
                                        }
                                    />
                                    {allergies.length > 1 && (
                                        <button onClick={() => removeAllergyRow(index)}>-</button>
                                    )}
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={() => addAllergyRow()}>+ Add row
                            </button>
                        </div>
                    </div>
                    <div className="mt-6">
                        <button
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register