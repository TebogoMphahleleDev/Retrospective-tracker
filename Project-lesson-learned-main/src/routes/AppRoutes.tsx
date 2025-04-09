import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../../Project-lesson-learned-main/src/components/navigation/Layout";
import DashboardPage from "../../Project-lesson-learned-main/src/pages/DashboardPage";
import LessonsPage from "../../Project-lesson-learned-main/src/pages/LessonsPage";
import ProjectsPage from "../../Project-lesson-learned-main/src/pages/ProjectPage";
import ReportsPage from "../../Project-lesson-learned-main/src/pages/ReportsPage";
import LoginPage from "../../Project-lesson-learned-main/src/pages/LoginPage";
import ProtectedRoute from "../../Project-lesson-learned-main/src/features/auth/ProtectedRoute";
import LessonDetailPage from "../../Project-lesson-learned-main/src/pages/LessonDetailPage";
import AdminPage from "../../Project-lesson-learned-main/src/pages/AdminPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<Layout />}>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/lessons"
          element={
            <ProtectedRoute>
              <LessonsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/lessons/:id"
          element={
            <ProtectedRoute>
              <LessonDetailPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <ProjectsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <ReportsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute adminOnly>
              <AdminPage />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
