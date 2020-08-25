import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import DevOptions from "../pages/DevOptions";
import MyHomeSetting from "../pages/MyHome/Setting";
import Test from "../pages/Test";
export const stackPageData = [
  {
    name: "Home",
    component: Home,
    options: {
      // headerShown: false,
      // header: () => null
    },
  },
  {
    name: "SignIn",
    component: SignIn,
    options: {
      headerShown: false,
      header: () => null,
    },
  },
  {
    name: "DevOptions",
    component: DevOptions,
    options: {
      headerShown: false,
      header: () => null,
    },
  },
  {
    name: "MyHomeSetting",
    component: MyHomeSetting,
    options: {
      title: "设置",
    },
  },
  {
    name: "Test",
    component: Test,
    options: {
      title: "测试",
    },
  },
];