import React, { useEffect, useState } from 'react'

const CategoryList = ({ category, setCategory }) => {
  // const [categoryList, setCategoryList] = useState(category || []);
   const handleDeleteCategory = async (e) => {
    await setCategory((prev) => prev.filter((cat) => cat !== e.target.name))
    console.log(category);
  }

  useEffect(()=>{
    // handleDeleteCategory();
  },[category])
  return (

    (
      category.length !== 0 && category.map((cat,index) =>
        <div key={index} className="flex mt-2 md:mt-0 px-4 py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition-colors">
          {cat}
          <button name={cat} onClick={handleDeleteCategory}
            className=" ml-2 text-md cursor-pointer">
            x
          </button>
        </div>)

)
  )
}

export default CategoryList
