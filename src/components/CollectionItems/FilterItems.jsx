import React, { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function FilterItems() {
  const { gender } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [price, setPrice] = useState(50);
  
  const [filter, setFilter] = useState({
    category: "",
    wear: "",
    color: "",
    size: [],
    brand: [],
    material: [],
    price: 50,
  });

  useEffect(() => {
    let newFilter = { ...filter };
  
    if (gender === "Men" || gender === "Women") {
      newFilter.category = gender;
    } else {
      newFilter.category = "";
    }
  
    setFilter(newFilter);
    handleParams(newFilter); // Update URL params when gender changes
  }, [gender]);
  
  
  


  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    const newPrice = Number(params.price) || 50;
    setPrice(newPrice);

    setFilter((prev) => ({
      ...prev,
      category: params.category || prev.category,
      wear: params.wear || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      price: newPrice,
    }));
  }, [searchParams]);

  const handleFilter = (e) => {
    const { name, type, value, checked } = e.target;
    let newFilter = { ...filter };

    if (type === "range") {
      setPrice(value);
    }

    if (type === "checkbox") {
      newFilter[name] = checked
        ? [...(newFilter[name] || []), value]
        : newFilter[name].filter((item) => item !== value);
    } else {
      newFilter[name] = value;
    }

    setFilter(newFilter);
    handleParams(newFilter);
  };

  const handleParams = (newFilter) => {
    const params = new URLSearchParams();
    Object.keys(newFilter).forEach((key) => {
      if (Array.isArray(newFilter[key]) && newFilter[key].length > 0) {
        params.set(key, newFilter[key].join(","));
      } else if (newFilter[key]) {
        params.set(key, newFilter[key]);
      }
    });
    setSearchParams(params);
  };

  const category = ["Men", "Women"];
  const wear = ["Top Wear", "Bottom Wear"];
  const size = ["XS", " S", "M", "L", "XL", "XXL"];
  const color = [
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Black",
    "Olive",
    "Orange",
    "Purple",
    "Pink",
    "Brown",
    "Gray",
    "Cyan",
  ];
  const brand = [
    "Elegance",
    "SportX",
    "DelicateWear",
    "StreetStyle",
    "ComfortFit",
    "FeminineWear",
    "ClassicStyle",
    "ChicWrap",
  ];
  const material = ["Cotton", "Polyester", "Wool", "Silk", "Denim"];

  return (
    <section className="px-4 pt-12 pb-6 overflow-y-auto">
      <h2 className="text-xl font-bold  mb-6">Filter</h2>

      {/* Category Filter */}
   {
    gender==="All"?
    <fieldset className="mb-3 pb-2 border-b">
    <legend className="font-semibold mb-2">Category</legend>
    {category.map((value, index) => (
      <div key={index} className="flex gap-3 mb-1">
        <input
          type="radio"
          name="category"
          value={value}
          checked={filter.category === value}
          onChange={handleFilter}
        />
        <label>{value}</label>
      </div>
    ))}
  </fieldset>
  :""
   }
      {/* Wear Filter */}
      <fieldset className="mb-3 pb-2 border-b">
        <legend className="font-semibold mb-2">Wear</legend>
        {wear.map((value, index) => (
          <div key={index} className="flex gap-3 mb-1">
            <input
              type="radio"
              id={`wear-${value}`}
              name="wear"
              value={value}
              checked={filter.wear === value}
              onChange={handleFilter}
            />
            <label htmlFor={`wear-${value}`}>{value}</label>
          </div>
        ))}
      </fieldset>

      {/* Size Filter */}
      <fieldset className="mb-3 pb-2 border-b">
        <legend className="font-semibold mb-2">Size</legend>
        {size.map((value, index) => (
          <div key={index} className="flex gap-3 mb-1">
            <input
              type="checkbox"
              id={`size-${value}`}
              name="size"
              value={value}
              checked={filter.size.includes(value)}
              onChange={handleFilter}
            />
            <label htmlFor={`size-${value}`}>{value}</label>
          </div>
        ))}
      </fieldset>

      {/* Color Filter */}
      <fieldset className="mb-3 pb-2 border-b">
        <legend className="font-semibold mb-2">Color</legend>
        <div className="flex gap-2 flex-wrap">
          {color.map((value, index) => (
            <label key={index} className="cursor-pointer">
              <input
                type="radio"
                name="color"
                value={value}
                onChange={handleFilter}
                checked={filter.color === value}
                className="hidden"
              />
              <div
                className={` w-7 h-7 rounded-full border hover:scale-105 transition-all ${
                  filter.color === value ? "border-2 border-blue-500" : ""
                } `}
                style={{ backgroundColor: value }}
              ></div>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Brand Filter */}
      <fieldset className="mb-3 pb-2 border-b">
        <legend className="font-semibold mb-2">Brand</legend>
        {brand.map((value, index) => (
          <div key={index} className="flex gap-3 mb-1">
            <input
              type="checkbox"
              id={`brand-${value}`}
              name="brand"
              value={value}
              checked={filter.brand.includes(value)}
              onChange={handleFilter}
            />
            <label htmlFor={`brand-${value}`}>{value}</label>
          </div>
        ))}
      </fieldset>

      {/* Material Filter */}
      <fieldset className="mb-3 pb-2 border-b">
        <legend className="font-semibold mb-2">Material</legend>
        {material.map((value, index) => (
          <div key={index} className="flex gap-3 mb-1">
            <input
              type="checkbox"
              id={`material-${value}`}
              name="material"
              value={value}
              checked={filter.material.includes(value)}
              onChange={handleFilter}
            />
            <label htmlFor={`material-${value}`}>{value}</label>
          </div>
        ))}
      </fieldset>

      {/* Price Range Filter */}
      <fieldset className="mb-3 pb-2 w-full">
        <legend className="font-semibold mb-2">Price</legend>
        <input
          type="range"
          max={100}
          min={10}
          name="price"
          value={price}
          onChange={handleFilter}
          className="w-full bg-white block focus:ring-white hover:bg-white"
        />
        <div className="flex w-full justify-between">
          <span>${10}</span>
          <span>${price}</span>
        </div>
      </fieldset>
    </section>
  );
}
