import { ImageBackground } from 'react-native';

import { styles } from './styles';

interface Props {
    children: React.ReactNode;
}

export function Background({ children }: Props) {
    return (
        <ImageBackground
            source={require('../../assets/background-galaxy.png')}
            defaultSource={require('../../assets/background-galaxy.png')}
            style={styles.container}
        >
            {children}
        </ImageBackground>
    );
}