import {View, Text} from 'react-native';
import { Link, useRouter } from 'expo-router';

const Login = () => {
    const router = useRouter();

    return (
        <View>
            <Text  className="text-2xl text-red-600">Login </Text>
            <Link href="/">main</Link>
        </View>
    );
};

export default Login;
