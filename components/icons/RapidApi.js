import { IconText } from '../styles/Icon.styled';
import Image from 'next/image'
function RapidAPI() {
    return (
        <>
            <Image src="/icons/rapid-api.png" width={64} height={35} objectFit="cover" />
            <IconText>RAPID API</IconText>
        </>
    );
}

export default RapidAPI;
