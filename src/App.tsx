import {
  Refine,
  GitHubBanner,
  WelcomePage,
  Authenticated,
} from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { BrowserRouter, Route, Routes, Outlet } from "react-router";
import routerProvider, {
  NavigateToResource,
  CatchAllNavigate,
  UnsavedChangesNotifier,
  DocumentTitleHandler,
} from "@refinedev/react-router";
import { dataProvider } from "./providers/data";
import { Layout } from "./components/refine-ui/layout/layout";
import { useNotificationProvider } from "./components/refine-ui/notification/use-notification-provider";
import { Toaster } from "./components/refine-ui/notification/toaster";
import { ThemeProvider } from "./components/refine-ui/theme/theme-provider";
import "./App.css";
import DashboardPage from "./pages/dashboard";
import { BookOpen, Building2, GraduationCap, Home } from "lucide-react";
import SubjectsListPage from "./pages/subjects/list";
import SubjectsCreatePage from "./pages/subjects/create";
import DepartmentsListPage from "./pages/departments/list";
import ClassesListPage from "./pages/classes/list";
import ClassesCreatePage from "./pages/classes/create";
import ClassesShow from "./pages/classes/show";

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ThemeProvider>
          <DevtoolsProvider>
            <Refine
              dataProvider={dataProvider}
              notificationProvider={useNotificationProvider()}
              routerProvider={routerProvider}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                projectId: "5jeGEX-mqJqOE-sx48GJ",
              }}
              resources={[
                {
                  name: "dashboard",
                  list: "/",
                  meta: {
                    label: "Home",
                    icon: <Home />,
                  },
                },
                {
                  name: "subjects",
                  list: "/subjects",
                  create: "/subjects/create",
                  edit: "/subjects/edit/:id",
                  show: "/subjects/show/:id",
                  meta: {
                    label: "Subjects",
                    icon: <BookOpen />,
                  },
                },

                {
                  name: "departments",
                  list: "/departments",
                  create: "/departments/create",
                  edit: "/departments/edit/:id",
                  show: "/departments/show/:id",
                  meta: {
                    label: "Departments",
                    icon: <Building2 />,
                  },
                },
                {
                  name: "classes",
                  list: "/classes",
                  create: "/classes/create",
                  show: "/classes/show/:id",
                  meta: {
                    label: "Classes",
                    icon: <GraduationCap />,
                  },
                },
              ]}
            >
              <Routes>
                <Route
                  element={
                    <Layout>
                      <Outlet />
                    </Layout>
                  }
                >
                  <Route path="/" element={<DashboardPage />} />

                  <Route path="subjects">
                    <Route index element={<SubjectsListPage />} />
                    <Route path="create" element={<SubjectsCreatePage />} />
                  </Route>

                  <Route path="departments">
                    <Route index element={<DepartmentsListPage />} />
                  </Route>

                  {/* Classes */}
                  <Route path="classes">
                    <Route index element={<ClassesListPage />} />
                    <Route path="create" element={<ClassesCreatePage />} />
                    <Route path="show/:id" element={<ClassesShow />} />
                  </Route>
                </Route>
              </Routes>
              <Toaster />
              <RefineKbar />
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
            <DevtoolsPanel />
          </DevtoolsProvider>
        </ThemeProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
