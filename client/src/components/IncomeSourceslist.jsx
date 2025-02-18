
import React, { useState } from 'react';
import { incomesourcestore } from '../store/incomesourcestore';
// import { incomesourcestore } from '../store/incomesourcestore';
// import { incomesource } from '../store/incomesourcestore';
// import { incomesource } from '../store/incomesource';

const IncomeSourceCards = () => {
    const {  incomesources, editincomesource, getincomesources } = incomesourcestore();
    const [editMode, setEditMode] = useState(null);
    const [editData, setEditData] = useState({ name: '', description: '' });

    // Load income sources when the component mounts
    React.useEffect(() => {
        getincomesources();
    }, [getincomesources]);

    // Handle input changes for editing
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Trigger edit function in Zustand
    const handleEdit = (id) => {
        editincomesource(id, editData);
        setEditMode(null); // Exit edit mode
    };

    return (
      
        <div className='mx-10   p-5'>
            <a href='/Addincomeamountform'>

<button className='flex float-right border-2 border-red-900 hover:bg-slate-500 hover:text-white p-2 rounded-md'> Income Amount Add</button>
            </a>
        <div className="income-source-list ">
                    <div  className=' flex justify-around m-5'>
                        <h1 className='-ml-96 text-2xl '>Name</h1>
                        <h3 className='-ml-96 text-2xl '>Description</h3>
                    </div>
            { incomesources.map((source) => (
                <div key={source._id} className="income-source-row  flex justify-between border-b py-2 mx-auto  p-5">
                    {editMode === source._id ? (
                        <>
                            <input
                                type="text"
                                name="name"
                                value={editData.name}
                                onChange={handleChange}
                                placeholder="Edit Name"
                                className="p-1 border mr-2"
                                />
                            <input
                                type="text"
                                name="description"
                                value={editData.description}
                                onChange={handleChange}
                                placeholder="Edit Description"
                                className="p-1 border mr-2"
                                />
                            <button onClick={() => handleEdit(source._id)} className="text-blue-500">
                                Save
                            </button>
                            <button onClick={() => setEditMode(null)} className="text-red-500 ml-2">
                                Cancel
                            </button>
                        </>
                    ) : (
                        <>
                            <span>{source.name}</span>
                            <span>{source.description}</span>
                            <button onClick={() => { setEditMode(source._id); setEditData({ name: source.name, description: source.description }); }} className="text-blue-500">
                                Edit
                            </button>
                        </>
                    )}
                </div>
            ))}
        </div>
                     </div>
    );
};

export default IncomeSourceCards;

