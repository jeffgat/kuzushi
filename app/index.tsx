import Layout from '@/components/Layout';
import Home from '@/screens/home';
import { NativeBaseProvider } from 'native-base';
import { theme } from '@/theme';

export default function Page() {
    return (
        <NativeBaseProvider theme={theme}>
            <Layout>
                <Home />
            </Layout>
        </NativeBaseProvider>
    );
}
