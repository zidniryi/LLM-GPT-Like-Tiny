import React, {useState} from 'react';
import axios from 'axios';
import {Layout, Menu, Input, Button, Typography, Spin} from 'antd';
import 'antd/dist/reset.css';
import './App.css'; // Custom styles

const {Header, Content, Footer} = Layout;
const {Title, Paragraph} = Typography;

const App = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setResponse(''); // Clear previous response

    try {
      const res = await axios.post('http://localhost:3001/generate', {
        model: 'tinyllama',
        prompt: prompt,
        raw: true,
        stream: false,
      });

      setResponse(res.data.response); // Set the response
      console.log(res);
    } catch (error) {
      console.error("Error:", error);
      setResponse("Error fetching response. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['about']}>
          <Menu.Item key="about">About</Menu.Item>
        </Menu>
      </Header>
      <Content style={{padding: '50px'}}>
        <div className="site-layout-content">
          <Title level={2}>GPT-like open endeavor with TinyLlama</Title>
          <Input.TextArea
            rows={4}
            placeholder="Type your prompt here..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            style={{marginBottom: '20px'}}
          />
          <Button
            type="primary"
            onClick={handleGenerate}
            loading={loading}
            style={{marginBottom: '20px'}}
          >
            Generate
          </Button>
          <div className="response-container">
            {loading ? (
              <Spin tip="Generating..." />
            ) : (
              <>
                {response && <Title level={4}>Response:</Title>}
                <Paragraph>{response}</Paragraph>
              </>
            )}
          </div>
        </div>
      </Content>
      <Footer style={{textAlign: 'center'}}>
        GPT-like Generator (Tinyllama) ©{new Date().getFullYear()} {` `}
        <a href="https://www.linkedin.com/in/zidni-ridwan-nulmuarif/" target="_blank" rel="noopener noreferrer">
          Zidni Ridwan Nulmuarif
        </a>
      </Footer>
    </Layout>
  );
};

export default App;
