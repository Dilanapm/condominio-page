// components/AlertMessage.jsx
import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

const AlertMessage = ({ type = "success", message, title, onClose }) => {
  const isSuccess = type === "success";
  const iconClass = isSuccess ? "text-green-600" : "text-red-600";
  const bgClass = isSuccess ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800";
  const Icon = isSuccess ? CheckCircle : XCircle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-6 rounded-lg text-center ${bgClass}`}
    >
      <div className="flex flex-col items-center space-y-3">
        <Icon size={40} className={iconClass} />
        {title && <h2 className="text-lg font-semibold">{title}</h2>}
        <p className="text-sm">{message}</p>
        <button
          onClick={onClose}
          className={`mt-4 px-6 py-2 rounded-lg text-white transition-colors ${
            isSuccess ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"
          }`}
        >
          Cerrar
        </button>
      </div>
    </motion.div>
  );
};

export default AlertMessage;
