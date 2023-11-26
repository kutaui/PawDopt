import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import { Link } from 'expo-router';
import { lineHeight } from 'nativewind/dist/tailwind/native/line-height';
import AntDesign from '@expo/vector-icons/AntDesign';

const App = () => {
    return (
        <View className="bg-white w-full h-[80%] flex items-center justify-between mt-4">
            <Image
                className="w-72 h-72"
                source={require('../assets/Untitled.png')}
                resizeMode="contain"
            />
            <View className="w-[85%]">
                <Text style={{lineHeight: 70}} className="text-5xl font-semibold text-black/75 ">Don't Shop,
                    Adopt.</Text>
                <View className="w-[60%] border-b-2 my-4 border-zinc-400 "/>
                <Text className="text-2xl text-black/75">Ready to make a new friend?
                </Text>
            </View>
            <View className="w-52 h-28 bg-violet-600 rounded-tl-full rounded-tr-full absolute -bottom-40 -right-24">
                <View className="absolute left-12 bottom-8">
                    <Link href="/login" asChild>

                        <AntDesign name="arrowright" size={40} color="white"/>
                    </Link>

                </View>
            </View>

        </View>
    );
};

export default App;
