import LoginForm from "@/components/login/LoginForm"
import RegisterForm from "../../components/login/RegisterForm"


export default function LoginPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md mb-4">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-600">로그인</h2>
        <LoginForm />
      </div>
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-600">회원가입</h2>
        <RegisterForm />
      </div>
    </div>
  )
}
