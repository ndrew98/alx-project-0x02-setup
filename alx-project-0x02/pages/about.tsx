import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <div>
      <Header />
      <main className="p-6 text-center space-y-6">
        <h1 className="text-2xl font-bold mb-4">About Us</h1>

        <div className="flex gap-4 justify-center">
          <Button label="Small Button" size="small" shape="rounded-sm" />
          <Button label="Medium Button" size="medium" shape="rounded-md" />
          <Button label="Large Button" size="large" shape="rounded-full" />
        </div>
      </main>
    </div>
  );
}
