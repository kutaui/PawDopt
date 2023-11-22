import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Link, useRouter } from 'expo-router';

const App = () => {
    const router = useRouter();
    return (
        <View>
            <Text className="text-2xl text-red-600">Hello World</Text>
            <Link href="/login" asChild>
                <TouchableWithoutFeedback><Text className="w-20 bg-red-700"> Login</Text></TouchableWithoutFeedback>

            </Link>
        </View>
    );
};

export default App;
