import { Affix } from 'antd';

export default function Home() {
    return (
        <div>
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