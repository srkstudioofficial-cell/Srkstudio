import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MainLayout } from "@/components/layout/MainLayout";
import Home from "@/pages/Home";
import Category from "@/pages/Category";
import WeddingVendor from "@/pages/WeddingVendor";
import RealWedding from "@/pages/RealWedding";
import BookNow from "@/pages/BookNow";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/category/:id" component={Category} />
        <Route path="/wedding-vendor" component={WeddingVendor} />
        <Route path="/real-wedding" component={RealWedding} />
        <Route path="/book-now" component={BookNow} />
        <Route component={NotFound} />
      </Switch>
    </MainLayout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
