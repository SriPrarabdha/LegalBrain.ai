import Header from '@/components/Header';
import {FC} from 'react';

interface pageProps{}

const page : FC<pageProps> = ({}) =>{
    return <div>
        <Header />
        Chat With Docs
    </div>
}

export default page