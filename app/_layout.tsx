import { Stack } from 'expo-router';

export default function AppLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                headerTitle: '',
            }}/>

            <Stack.Screen name="login" options={{title: 'Login'}}/>
        </Stack>
    );
}