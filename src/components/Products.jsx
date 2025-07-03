import React, { useEffect, useState } from 'react'


function Products() {
    const [product, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);

    const [selectedCategory, setSelectedCategory] = useState(null);

    const categories = Array.from(new Set(product.map((res) => res.category)))

    const categoryOptions = categories.map((category) => ({
        value: category,
        label: category
    }))


    const [SearchTerm, setSearchTerm] = useState("");


    const [selectedSort, setselectedSort] = useState("");
    const filterProducts =
        selectedCategory ?
            product.filter((product) => product.category === selectedCategory.value) :
            SearchTerm != "" ?
                product.filter((Eachproduct) => Eachproduct.title.toLowerCase().includes(SearchTerm.toLowerCase())) :
                selectedSort != "" && selectedSort == 'asc' ?
                    product.sort((a, b) => a.price - b.price) :
                    selectedSort != "" && selectedSort == 'dsc' ?
                        product.sort((a, b) => b.price - a.price) :
                        product;

    return (
        <div>
            <section className='p-4 md:p-8'>
                <div>
                    <h3 className='text-2xl md:text-3xl font-bold mb-6 text-center'>Products</h3>
                </div>
               
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {
                        filterProducts.map(EachProduct => (
                            <div>
                                <div className='bg-white shadow rounded p-4 flex flex-col items-center'>
                                    <img src={EachProduct.image} className='h-40 mb-4 w-auto object-contain' alt=''></img>
                                    <h4 className='text-md md:text-lg font-semibold mb-2 text-center'>{EachProduct.title}</h4>
                                    <h4 className='text-md md:text-lg font-semibold mb-2 text-red-500'>${EachProduct.price}</h4>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

export default Products
