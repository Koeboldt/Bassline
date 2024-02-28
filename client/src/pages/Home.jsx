import { Affix } from 'antd';
import backgroundImage from '../components/assets/img/Head_of_Five_Strings_Bass_Guitar_51875534926.jpg'

export default function Home() {
    return (
        <div style={{ bankgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
            <Affix style={{ position: 'fixed', top: 0, left: 0, zIndex: 999 }}>
                <h1>Bassline!</h1>
            </Affix>
            <p>
                Welcome to Bassline, a place for music buffs of every genre to come and discuss their favorite artists, albums, and songs! 
                Whether you'd like to study some timeless classics, or are looking for todays hottest hits, Bassline has you covered with a deep community that shares your passion!
            </p>
        </div>
    )
}