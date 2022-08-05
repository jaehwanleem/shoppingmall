import Directory from '../../components/directory/directory.component';

import { Outlet } from 'react-router-dom'; //아웃렛 으로 자식 path 내용 제대로 출력되게 만든다 


const Home = () => {
  // 하드코딩 대신 카테고리를 놔둬서 코드를 작게 냅둔다
  const categories =

    [
      {
        "id": 1,
        "title": "hats",
        "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
      },
      {
        "id": 2,
        "title": "jackets",
        "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
      },
      {
        "id": 3,
        "title": "sneakers",
        "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
      },
      {
        "id": 4,
        "title": "womens",
        "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
      },
      {
        "id": 5,
        "title": "mens",
        "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
      }
    ]

  return (
    
    <div>
        <Outlet/>
        <Directory categories={categories} />
        </div>

        //outlet 가 위에 오면 위에 디스플레이 되고 아울렛이 아래에 오면 home 뒤에 아래에 디스플레이된다 
    
  );
}

export default Home