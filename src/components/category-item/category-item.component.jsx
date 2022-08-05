// 카테고리 카드 내부 내용 

import  './category-item.styles.scss'


const CategoryItem = ({category}) => {

    const {imageUrl, title, id } = category;
    
return (
    <div key={id} className="category-container">
    <div

      className="background-image"

      style={{
        backgroundImage: `url(${imageUrl})`

      }} />
    <div className="category-body-container">
      <h2>{title}</h2>
      <p>Shop Now</p>

    </div>
  </div>

)

}

export default CategoryItem