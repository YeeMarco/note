import { deflate } from "zlib";




import Element1 from '@/components/component1'
import Element2 from '@/components/component2'
const MyPage1 = Element1;
const MyPage2 = Element2;


const paths = {
  index:MyPage1,
  info:MyPage2
}
export default paths


const path =[
  {path:'index:id',page:MyPage1},
  {info:'info:id',page:MyPage2}
]
  
