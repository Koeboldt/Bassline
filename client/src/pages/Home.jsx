import { Affix } from 'antd';
import backgroundImage from '../components/assets/img/Head_of_Five_Strings_Bass_Guitar_51875534926.jpg'

export default function Home() {
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
        </div>
    )
}