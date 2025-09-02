import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <section className="mx-auto flex min-h-[80vh] max-w-md flex-col justify-center px-4">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-semibold">Giriş Yap</h1>
        <p className="mt-2 text-sm text-gray-600">Hesabınıza erişmek için bilgilerinizi girin.</p>
      </div>
      <div className="rounded-lg border border-gray-200 p-6 shadow-sm">
        <LoginForm />
      </div>
    </section>
  );
}
