// import { MainPage } from "../pages/MainPage";
import { Button } from "../shared/ui/Button";

export const App = () => {
  return (
    <main>
      {/* <MainPage /> */}
      <div className="flex space-x-4 p-2 bg-bg-subtle items-center">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="silent">Silent</Button>
        <Button variant="danger">Danger</Button>
        <Button size="small" variant="secondary">
          Small
        </Button>
        <Button disabled>Disabled</Button>
        <Button icon={"+"}>Icon</Button>
      </div>
    </main>
  );
};
