import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import { Link } from 'expo-router';
import { lineHeight } from 'nativewind/dist/tailwind/native/line-height';

const App = () => {
    return (
        <View className="bg-white w-full h-full flex items-center ">
            <Image
                className="w-72 h-72"
                source={require('../assets/Untitled.png')}
                resizeMode="contain"
            />
            <View className="w-[85%] pt-20">
            <Text style={{lineHeight:70}} className="text-5xl font-semibold text-black/75 ">Don't Shop, Adopt.</Text>
            <View className="w-[60%] border-b-2 my-4 border-zinc-400 "/>
            <Text className="text-3xl text-black/75">Ready to make a new friend?
            </Text>
            </View>
            {/*<Link href="/login" asChild>
                <TouchableWithoutFeedback><Text className="w-20 bg-red-700"> Login</Text></TouchableWithoutFeedback>
            </Link>*/}
        </View>
    );
};

export default App;
