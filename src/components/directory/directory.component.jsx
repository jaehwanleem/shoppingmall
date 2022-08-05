//카테고리 아이템 매핑으로 하드코딩없이 나열하기 위한 파일 

import CategoryItem from "../category-item/category-item.component"

import  './directory.styles.scss'


const Directory = ({categories}) => {
    return (
        <div className="directory-container">
            {categories.map((category)=>(
                <CategoryItem key = {category.id} category={category} /> 
            ))}

        </div>

    )
}

export default Directory