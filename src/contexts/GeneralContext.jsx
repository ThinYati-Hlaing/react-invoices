import React, { createContext, useState } from 'react'

export const GeneralContext = createContext();

const GeneralContextProvider = ({ children }) => {

    const [openDrawer, setOpenDrawer] = useState(GeneralContext);

    const toggleDrawer = () => {
        setOpenDrawer(!openDrawer);
    }

    const [products, setProduct] = useState([
        { id: 1, name: "Smartwatch", price: 249.99 },
        { id: 2, name: "Laptop", price: 999.99 },
        { id: 3, name: "Smartphone", price: 799.99 },
        { id: 4, name: "Headphones", price: 199.99 },
        { id: 5, name: "Tablet", price: 499.99 }
        // Add more fruits as needed
    ]);

    const addProduct = (newProduct) => {
        setProduct([...products, newProduct])
    }

    const [records, setRecord] = useState([]);

    const addRecord = (newRecord) => {
        const isExitedRecord = records.find(record => record.productId === newRecord.productId);

        if (isExitedRecord) {
            updateRecord(isExitedRecord.id, newRecord.quantity)
        } else {
            setRecord([...records, newRecord])
        }
    }

    const removeRecord = (id) => setRecord(records.filter((record) => record.id != id))

    const updateRecord = (id, addQuantity) => {
        setRecord(records.map((el) => {

            if (el.id === id) {

                const newQuantity = el.quantity + addQuantity;
                const newCost = el.price * newQuantity;

                return {
                    ...el,
                    quantity: newQuantity,
                    cost: newCost
                }
            }

            return el;
        }))
    }

    return (
        <GeneralContext.Provider value={{ openDrawer, toggleDrawer, products, addProduct, records, addRecord, removeRecord, updateRecord }}>
            {children}
        </GeneralContext.Provider>
    )
}

export default GeneralContextProvider;