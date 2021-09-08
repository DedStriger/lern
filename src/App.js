import logo from './logo.svg';
import './App.css';
import Header from './components/Header/'
import Layout from './components/Layout/'
import Footer from './components/Footer/'

function App() {
  return (
    <>
        <Header title='nikita' description='prokuratov'></Header>
        <Layout title='nikita' desc='prokuratov' urlBg='none' colorBg='pink'></Layout>
        <Layout title='nikita' desc='prokuratov' urlBg='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e4337cf5-3f3b-4436-b045-8aff91da2cac/bg1.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210908%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210908T185608Z&X-Amz-Expires=86400&X-Amz-Signature=f6b2d2a74e2d49cfd798df23d9be1273799504786b821ef40a5eb07fd14d150f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22bg1.jpg%22' colorBg='none'></Layout>
        <Footer/>
    </>
  );
}

export default App;
