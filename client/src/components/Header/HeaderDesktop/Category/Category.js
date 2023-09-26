import React, { useState }from 'react'
import {CategoryItems} from './CategoryItems';
import { useStateValue } from "../../../../context/StateContext";

//Material-Ui Icon
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Category (){
        const [searchCategory, dispatch] = useStateValue();
        const [activeCategory, setActiveCategory] = useState("Toutes nos Catégories");
        const [activeCategoryDropDown, setActiveCategoryDropDown] = useState(false);
        const [categoryFocused, setCategoryFocused] = useState(false);
        console.log(searchCategory)
 
        const handleChangeCategory = (item) => {
            setActiveCategory(item);
            dispatch({
                type: "SEARCH_CATEGORY",
                searchCategory: item,
            });
        }


    return (
        <div  className={categoryFocused ? "header__category header__category__focused" : "header__category"} onFocus={() => setCategoryFocused(!categoryFocused)} onBlur={() => setCategoryFocused(!categoryFocused)} onClick={() => setActiveCategoryDropDown(!activeCategoryDropDown)}>
            <span className="header__categoryText">{activeCategory}</span>
            <ArrowDropDownIcon fontSize="small" className="header__categoryIcon"/>
            <div className={ activeCategoryDropDown ? "header__category__dropdown header__category__dropdownActive" : "header__category__dropdown " }>
                <ul>
                    {CategoryItems.map((item, index) => {
                        return (
                            <li key={index} onClick={() => handleChangeCategory(item)} >
                                {item}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
 
}

export default Category;
