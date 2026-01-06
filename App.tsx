
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Tutor from './pages/Tutor';
import Quiz from './pages/Quiz';
import SubjectDetailView from './pages/SubjectDetailView';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutor" element={<Tutor />} />
          <Route path="/subject/:subjectId" element={<SubjectDetailView />} />
          <Route path="/quiz/:subjectId/:chapterId" element={<Quiz />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
