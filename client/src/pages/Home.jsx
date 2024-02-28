import { Affix } from 'antd';
import backgroundImage from '../components/assets/img/Head_of_Five_Strings_Bass_Guitar_51875534926.jpg'

export default function Home() {
    return (
        <div style={{ backgroundSize: 'cover', minHeight: '100vh', position: 'relative' }}>
            <Affix style={{ position: 'fixed', top: 0, left: 0, zIndex: 999 }}>
                <div style={{ padding: '10px', borderRadius: '10px', backgroundColor: 'rgba(255, 255, 255, 0.15)', color: 'white' }}>
                    <h1>Bassline!</h1>
                </div>
            </Affix>
            <div style={{ position: 'absolute', bottom: 15, right: 15, marginRight: '20px', marginBottom: '20px', padding: '10px', borderRadius: '10px', backgroundColor: 'rgba(255, 255, 255, 0.15)' color: 'white' }}>
                <p>
                    Welcome to Bassline, a place for music buffs of every genre to come and discuss their favorite artists, albums, and songs! 
                    Whether you'd like to study some timeless classics, or are looking for todays hottest hits, Bassline has you covered with a deep community that shares your passion!
                </p>
            </div>

        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
        </div>
    )
}