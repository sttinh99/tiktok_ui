import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import { OnlyHeader } from '~/components/Layout';
import Profile from '~/pages/Profile';

//public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: OnlyHeader },
    { path: '/search', component: Search, layout: null },
    { path: '/@:nickname', component: Profile },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
