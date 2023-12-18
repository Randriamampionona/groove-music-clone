import PageHeader from "@/components/PageHeader";
import { ThemeToogle } from "@/components/ThemeToogle";

const SettinsPage = () => {
  return (
    <>
      <PageHeader tile="Settings" />

      <div className="p-4 lg:px-8">
        <ThemeToogle />
      </div>
    </>
  );
};

export default SettinsPage;
