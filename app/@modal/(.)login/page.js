import { LoginForm } from '@/components/LoginForm';
import Modal from '@/components/Modal';

export default function Login() {
  return (
    <Modal>
      <h1 className="text-4xl font-bold mb-4 text-black">Login</h1>
      <LoginForm inModal />
    </Modal>
  );
}
